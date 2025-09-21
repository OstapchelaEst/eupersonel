'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

const JWT_SECRET = process.env.JWT_SECRET as string
const ADMIN_USERNAME = process.env.ADMIN_USERNAME as string
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH as string

if (!JWT_SECRET || !ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
  throw new Error('Server configuration error: Missing environment variables.')
}

export async function login(username: string, password: string) {
  const isUsernameCorrect = username === ADMIN_USERNAME
  const isPasswordCorrect = await bcrypt.compare(password, ADMIN_PASSWORD_HASH)

  if (isUsernameCorrect && isPasswordCorrect) {
    const sessionToken = uuidv4()
    const token = jwt.sign(
      { username: ADMIN_USERNAME, sessionId: sessionToken },
      JWT_SECRET,
      { expiresIn: '1d' }
    )

    await cookies().then((e) =>
      e.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 деней
        path: '/',
      })
    )

    return { success: true }
  } else {
    return { success: false, error: 'Неверный логин или пароль.' }
  }
}

export async function logout() {
  ;(await cookies()).delete('auth_token')
  redirect('/pl')
}

export async function getAuthStatus(): Promise<boolean> {
  const token = (await cookies()).get('auth_token')?.value

  if (!token) {
    return false
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return !!decoded
  } catch (error) {
    console.debug('JWT verification failed:', error)
    return false
  }
}
