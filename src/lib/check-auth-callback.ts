'use server'

import { getAuthStatus } from '@/app/actions/auth'

export const checkAuthCallback = async (
  callBack?: () => void,
  errorCallback?: () => void
) => {
  try {
    const isAuthenticated = await getAuthStatus()

    if (!isAuthenticated) throw Error('Unauthorized')

    callBack?.()
  } catch (error) {
    errorCallback?.()
  }
}
