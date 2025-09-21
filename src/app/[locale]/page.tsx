import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Link } from '../../../i18n/routing'

const locales = ['pl', 'en']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage() {
  const t = await getTranslations('Index')

  return (
    <div className="flex w-screen bg-no-repeat bg-cover bg-[url('/main-bg.jpg')] min-h-screen flex-col px-[6rem] py-[4rem]">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center p-4 text-center">
        <div className="p-4">
          <h1 className="text-5xl font-bold mb-4 leading-16">
            {t('title')} <br /> <b>EUPERSONEL</b>
          </h1>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="p-8 flex gap-10 items-center">
          <Button
            asChild
            size="xl"
            className="text-lg"
          >
            <Link href={`/about`}>{t('client')}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            className="text-lg"
          >
            <Link href={`/vacancies`}>{t('worker')}</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
