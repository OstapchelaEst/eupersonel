import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { getTranslations } from 'next-intl/server'

import { EditVacancyModal } from '@/components/modals/edit-vacancy-modal'
import { DeleteVacancyModal } from '@/components/modals/delete-vacancy-modal'
import { CreateVacancyModal } from '@/components/modals/create-vacancy-modal'
import { IVacancy } from '@/models/Vacancy'
import { isAuth } from '@/utils/isAuth'
import { Locale } from '../../../../i18n/routing'
import { getVacancies } from '@/lib/vacancies'

const locales = ['pl', 'en']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function VacanciesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations('Vacancies')
  const isAdmin = await isAuth()
  const vacancies: IVacancy[] = await getVacancies()

  return (
    <div className="flex min-h-screen flex-col inner_layout">
      <Header />
      <main className="flex-1 page_section">
        <div className="flex justify-between items-center mb-6 max-850:text-center max-850:flex-col gap-4">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          {isAdmin && <CreateVacancyModal />}{' '}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.length > 0 ? (
            vacancies.map((vacancy: IVacancy) => (
              <JobCard
                isAdmin={isAdmin}
                lang={locale}
                //@ts-expect-error type
                vacancy={vacancy}
                //@ts-expect-error type
                key={vacancy._id}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-muted-foreground">
              {t('no_vacancies')}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

interface JobCardProps {
  vacancy: {
    title: { pl: string; en: string }
    description: { pl: string; en: string }
    location: { pl: string; en: string }
    salary: string
  }
  isAdmin: boolean
  lang?: 'pl' | 'en'
}

export const JobCard = ({ vacancy, isAdmin, lang = 'pl' }: JobCardProps) => {
  const currentLang = lang

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col justify-between cursor-pointer">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {vacancy.title[currentLang]}
        </h3>

        <p className="text-lg font-semibold text-indigo-600 mb-3">
          {vacancy.salary}
        </p>

        <div className="flex items-center text-gray-500 mb-4">
          <svg
            className="w-5 h-5 mr-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-sm font-medium">
            {vacancy.location[currentLang]}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {vacancy.description[currentLang]}
        </p>
      </div>

      {/* Button at the bottom */}
      <div className="mt-4">
        <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          {currentLang === 'pl' ? 'Zobacz więcej' : 'View Details'}
        </button>

        {isAdmin && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {/* @ts-expect-error type */}
            <EditVacancyModal vacancy={vacancy} />
            {/* @ts-expect-error type */}
            <DeleteVacancyModal vacancyId={vacancy?._id} />
          </div>
        )}
      </div>
    </div>
  )
}
