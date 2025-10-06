import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth'
import { isAuth } from '@/utils/isAuth'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { LocaleSwitcher } from './locale-switcher'
import { DialogTitle } from './ui/dialog'
import { CONTACTS } from '@/utils/constants'

export const MobileMenu = async () => {
  const t = await getTranslations('Header')
  const t1 = await getTranslations('Index')
  const isAdmin = await isAuth()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="min-h-6 min-w-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="p-4"
      >
        <DialogTitle>
          <span className="sr-only">Mobile menu</span>
        </DialogTitle>

        <div className="flex flex-col gap-2 items-center pt-6">
          <Button
            asChild
            size="xl"
            className="text-lg min-w-[300px]"
          >
            <Link href={`/about`}>{t1('client')}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            className="text-lg min-w-[300px]"
          >
            <Link href={`/vacancies`}>{t1('worker')}</Link>
          </Button>

          {isAdmin && (
            <Button
              onClick={logout}
              size="xl"
              className="text-lg min-w-[300px]"
            >
              <LogOut className="h-4 w-4 mr-2" /> {t('logout')}
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-2 items-center">
          <a
            href={CONTACTS.PHONE}
            className="text-lg hover:underline"
          >
            {CONTACTS.PHONE}
          </a>
          <a
            href={`mailto:${CONTACTS.EMAIL}`}
            className="text-lg hover:underline"
          >
            {CONTACTS.EMAIL}
          </a>
          <LocaleSwitcher className="bg-gray-100" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
