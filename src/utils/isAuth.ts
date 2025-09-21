import { getAuthStatus } from '@/app/actions/auth'
import { cookies } from 'next/headers'
import { APP_URL } from './constants'

export const isAuth = async () => {
  const isAuthenticated = await getAuthStatus()
  const token = (await cookies()).get('auth_token')?.value

  if (!isAuthenticated && token) {
    await fetch(`${APP_URL}/api/logout`, {
      method: 'POST',
      credentials: 'include',
    })
  }

  return isAuthenticated
}
