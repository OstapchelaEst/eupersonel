import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
  throw new Error(
    'Server configuration error: Missing JWT_SECRET environment variable.'
  )
}

export async function authorizeAdmin() {
  const token = (await cookies()).get('auth_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    jwt.verify(token, JWT_SECRET)

    return null
  } catch (error) {
    console.error('JWT verification failed:', error)
    ;(await cookies()).delete('auth_token')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
}
