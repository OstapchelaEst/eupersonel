import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookieStore = await cookies()

    cookieStore.set({
      name: 'auth_token',
      value: '',
      maxAge: 0,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })
    console.log('Logout successfully')
    return NextResponse.json(
      { message: 'Logout successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error Logout:', error)

    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
