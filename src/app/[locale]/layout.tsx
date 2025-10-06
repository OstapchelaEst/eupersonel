import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { getMessages, setRequestLocale } from 'next-intl/server'

import { routing } from '../../../i18n/routing'
import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'
const locales = ['pl', 'en']
const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale

  if (!locale.includes(locale)) return redirect(`/${routing.defaultLocale}`)

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
