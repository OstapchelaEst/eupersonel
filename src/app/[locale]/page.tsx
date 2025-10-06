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
    <div className="flex w-screen bg-no-repeat bg-cover bg-[url('/main-bg.jpg')] min-h-screen flex-col px-24 py-16 max-950:px-8 max-950:pb-8 max-950:pt-2">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center p-4 text-center">
        <div className="p-4">
          <h1 className="text-5xl font-bold mb-4 leading-16 max-850:text-3xl max-850:leading-9 max-850:mb-2">
            {t('title')} <br /> <b>EUPERSONEL</b>
          </h1>
          <p className="text-lg text-muted-foreground max-850:text-base">
            {t('subtitle')}
          </p>
        </div>
        <div className="p-8 flex gap-10 items-center  max-850:flex-col  max-850:gap-4 max-850:p-4">
          <Button
            asChild
            size="xl"
            className="text-lg min-w-[300px]"
          >
            <Link href={`/about`}>{t('client')}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            className="text-lg min-w-[300px]"
          >
            <Link href={`/vacancies`}>{t('worker')}</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
