import React, { JSX } from 'react'
import {
  BsFileEarmarkText,
  BsPeopleFill,
  BsPinMapFill,
  BsBriefcaseFill,
  BsFolderFill,
  BsTelephone,
} from 'react-icons/bs'
import { BiSolidLike } from 'react-icons/bi'
import { MdOutlineManageSearch } from 'react-icons/md'
import { CONTACTS } from '@/utils/constants'

interface IServiceItem {
  title: string
  icon: JSX.Element
}

const serviceItems: IServiceItem[] = [
  {
    title:
      'Uzyskanie zezwolenia na wykonywanie pracy na terytorium RP przez cudzoziemca',
    icon: <BsPeopleFill />,
  },
  {
    title: 'Audyt legalności zatrudnienia cudzoziemców',
    icon: <BsPinMapFill />,
  },
  { title: 'Uzyskanie opinii starosty', icon: <BiSolidLike /> },
  {
    title: 'Uzyskanie zezwolenia na pobyt i pracę',
    icon: <MdOutlineManageSearch />,
  },
  {
    title: 'Rejestracja oświadczenia o powierzeniu wykonywania pracy',
    icon: <BsBriefcaseFill />,
  },
]

const featureItem: IServiceItem = {
  title:
    'Weryfikacja dokumentów aktualnie zatrudnionych pracowników i rekomendacje dalszych działań',
  icon: <BsFolderFill />,
}

const contactData = {
  title: 'Potrzebujesz pomocy w legalizacji?',
  subtitle: 'Skontaktuj się z nami',
  phone: CONTACTS.PHONE,
  icon: <BsTelephone />,
}

const HeaderSection = () => (
  <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 mb-12">
    <div className="text-brand mb-6">
      <BsFileEarmarkText className="w-20 h-20" />
    </div>
    <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
      Planujesz zatrudnić cudzoziemców, ale formalności związane z legalizacją
      ich pracy w Polsce spędzają Ci sen z powiek?
    </p>
    <p className="text-lg md:text-xl text-gray-600 mb-8">
      Albo nie masz czasu на ciągłe śledzenie przepisów i monitorowanie ich
      dokumentacji?
    </p>
    <div className="text-sm italic text-gray-500 max-w-2xl">
      <p>
        <span className="font-bold">Pomimo</span> naszym wykwalifikowanym i
        doświadczonym konsultantom zrobisz to za Ciebie.
      </p>
      <p className="mt-2">
        Wierzymy, że procedura zatrudniania obcokrajowców potrafi być naprawdę
        skomplikowana i pochłania dużo czasu, a w gąszczu zawiłych procedur,
        przepisów prawnych i wymaganych dokumentów zgubił się już nie jeden
        przedsiębiorca.
      </p>
    </div>
  </div>
)

const ServicesSection = () => (
  <div className="container mx-auto px-4 max-w-5xl">
    <p className="text-center text-xl font-bold text-gray-700 mb-12">
      W zależności od indywidualnych potrzeb i sytuacji zatrudnienia w Twojej
      firmie nasze wsparcie może obejmować:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {serviceItems.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="text-brand mb-4">
            {React.cloneElement(service.icon, {
              className: 'w-12 h-12 md:w-16 md:h-16',
            })}
          </div>
          <p className="text-sm font-semibold text-gray-700">{service.title}</p>
        </div>
      ))}
    </div>
  </div>
)

const AdditionalFeatureSection = () => (
  <div className="flex flex-col items-center text-center mb-12">
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center gap-4">
      <div className="text-brand">
        {React.cloneElement(featureItem.icon, {
          className: 'w-10 h-10 md:w-12 md:h-12',
        })}
      </div>
      <p className="text-base font-semibold text-gray-700 max-w-md">
        {featureItem.title}
      </p>
    </div>
  </div>
)

const ContactSection = () => (
  <div className="flex flex-col items-center text-center p-8 bg-brand text-white rounded-lg shadow-xl">
    <h3 className="text-2xl font-bold mb-2">{contactData.title}</h3>
    <p className="text-lg mb-4">{contactData.subtitle}</p>
    <a
      href={`tel:${contactData.phone}`}
      className="flex items-center font-bold text-xl md:text-2xl hover:underline transition-colors"
    >
      {React.cloneElement(contactData.icon, { className: 'w-6 h-6 mr-2' })}
      <span>{contactData.phone}</span>
    </a>
  </div>
)

export const Legalization = () => {
  return (
    <section className="bg-gray-100 page_section rounded-4xl pb-0!">
      <HeaderSection />
      <div className="border-b border-gray-300 my-8"></div>
      <ServicesSection />
      <AdditionalFeatureSection />
      <ContactSection />
    </section>
  )
}
