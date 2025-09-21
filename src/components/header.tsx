import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, LogOut } from 'lucide-react'
import { LocaleSwitcher } from './locale-switcher'
import { logout } from '@/app/actions/auth'
import { isAuth } from '@/utils/isAuth'
import { getTranslations } from 'next-intl/server'
import { LogoutBtn } from './logout-btn'
import { CONTACTS } from '@/utils/constants'

export async function Header() {
  const t = await getTranslations('Header')
  const isAdmin = await isAuth()

  return (
    <header className="flex justify-between items-center py-4">
      <Link
        href="/"
        className="text-lg font-bold"
      >
        Место для лого
      </Link>
      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-4">
          <Link
            href={`tel:${CONTACTS.PHONE}`}
            className="text-sm hover:underline"
          >
            {CONTACTS.PHONE}
          </Link>
          <Link
            href={`mailto:${CONTACTS.EMAIL}`}
            className="text-sm hover:underline"
          >
            {CONTACTS.EMAIL}
          </Link>
        </div>

        <LocaleSwitcher />

        <LogoutBtn />
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 py-4">
            <Link
              href="tel:+1234567890"
              className="text-lg hover:underline"
            >
              +1 234 567 890
            </Link>
            <Link
              href="mailto:info@company.com"
              className="text-lg hover:underline"
            >
              info@company.com
            </Link>
            <LocaleSwitcher />
            {isAdmin && (
              <Button
                onClick={logout}
                className="mt-4"
              >
                <LogOut className="h-4 w-4 mr-2" /> {t('logout')}
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
