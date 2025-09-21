import { logout } from '@/app/actions/auth'
import { Button } from './ui/button'
import { getTranslations } from 'next-intl/server'
import { isAuth } from '@/utils/isAuth'
import { LogOut } from 'lucide-react'

export const LogoutBtn = async () => {
  const t = await getTranslations('Header')
  const isAdmin = await isAuth()
  if (!isAdmin) return null

  return (
    <div className="flex items-center gap-2 ml-4">
      <Button
        variant="ghost"
        onClick={logout}
      >
        <LogOut className="h-4 w-4 mr-2" /> {t('logout')}
      </Button>
    </div>
  )
}
