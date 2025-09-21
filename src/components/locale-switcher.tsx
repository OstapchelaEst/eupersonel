'use client'

import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1]

  const onLocaleChange = () => {
    const newLocale = currentLocale === 'pl' ? 'en' : 'pl'

    const arr = pathname.split('/').filter((e) => !!e)
    arr[0] = newLocale
    router.replace('/' + arr.join('/'))
  }

  const otherLocale = currentLocale === 'pl' ? 'en' : 'pl'

  return (
    <Button
      className="min-w-[3.5rem] cursor-pointer transition-all duration-300 active:scale-90"
      variant="ghost"
      onClick={onLocaleChange}
    >
      {otherLocale.toUpperCase()}
    </Button>
  )
}
