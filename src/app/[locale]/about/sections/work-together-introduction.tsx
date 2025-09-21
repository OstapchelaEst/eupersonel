const stepsData = [
  {
    number: 1,
    title: 'Planowanie rekrutacji',
    items: [
      'Określenie potrzeb: Ustalenie liczby i rodzaju wakatów, które należy obsadzić.',
      'Analiza stanowiska: Opracowanie jasnego opisu stanowiska i wymagań wobec kandydatów.',
      'Wybór źródeł: Wybór metod i kanałów poszukiwania (np. ogłoszenia, media społecznościowe).',
    ],
  },
  {
    number: 2,
    title: 'Pozyskiwanie kandydatów',
    items: [
      'Publikacja ofert pracy: Umieszczanie ogłoszeń o pracę w odpowiednich kanałach.',
      'Rekrutacja wewnętrzna: Poszukiwanie kandydatów wewnątrz firmy.',
      'Poszukiwanie proaktywne: Aktywne wyszukiwanie kandydatów, którzy sami nie aplikują (np. headhunting).',
    ],
  },
  {
    number: 3,
    title: 'Selekcja i ocena',
    items: [
      'Wstępna selekcja: Przegląd CV pod kątem zgodności z wymaganiami.',
      'Rozmowy kwalifikacyjne: Wywiady w celu oceny kompetencji i doświadczenia.',
      'Testy i oceny: Wykorzystanie testów do oceny umiejętności i zdolności.',
    ],
  },
  {
    number: 4,
    title: 'Sprawdzenie referencji',
    items: [
      'Kontakt z byłymi pracodawcami w celu potwierdzenia informacji z CV.',
    ],
  },
  {
    number: 5,
    title: 'Podjęcie decyzji',
    items: [
      'Wybór najlepszego kandydata: Podjęcie ostatecznej decyzji o zatrudnieniu najlepszego kandydata na stanowisko.',
    ],
  },
  {
    number: 6,
    title: 'Adaptacja (onboarding)',
    items: [
      'Przygotowanie do przyjęcia: Przekazanie nowemu pracownikowi wszystkich niezbędnych informacji.',
      'Integracja: Pomoc w adaptacji do zespołu, kultury i struktury organizacyjnej.',
    ],
  },
]

const StepCard = ({
  number,
  title,
  items,
}: {
  number: number
  title: string
  items: string[]
}) => {
  return (
    <div className="bg-white cursor-pointer p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center text-lg flex-shrink-0 mr-4">
          {number}
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 flex-grow">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export const WorkTogetherIntroduction = () => {
  return (
    <section className="page_section">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="page_title">Jak wygląda współpraca?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
