import { LocaleSwitcher } from './locale-switcher'
import { LogoutBtn } from './logout-btn'
import { CONTACTS } from '@/utils/constants'
import Image from 'next/image'
import { MobileMenu } from './mobile-menu'
import Link from 'next/link'

export async function Header() {
  return (
    <header className="flex justify-between items-center py-4 max-950:pt-0">
      <Link
        href="/"
        className="text-lg font-bold"
      >
        <Image
          alt="Logo"
          width={250}
          height={112}
          src="/brand/logo.png"
          className="w-[200px]"
        />
      </Link>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-4">
          <a
            href={`tel:${CONTACTS.PHONE}`}
            className="text-sm hover:underline"
          >
            {CONTACTS.PHONE}
          </a>
          <a
            href={`mailto:${CONTACTS.EMAIL}`}
            className="text-sm hover:underline"
          >
            {CONTACTS.EMAIL}
          </a>
        </div>

        <LocaleSwitcher />

        <LogoutBtn />
      </div>

      <MobileMenu />
    </header>
  )
}
