const data = [
  {
    title: 'Rekrutacja',
    description: [
      'Klient określa swoje bieżące i przyszłe potrzeby kadrowe. Wyznaczane są wymagane kompetencje, umiejętności i doświadczenie kandydatów.',
      'Wstępna ocena i przesiew kandydatów na podstawie określonych kryteriów.',
      'Proces adaptacji i wprowadzania nowego pracownika do organizacji (tzw. onboarding), aby pomóc mu szybko i skutecznie zaadaptować się w nowym środowisku pracy.',
    ],
  },
  {
    title: 'Oszczędność pieniędzy i czasu',
    description: [
      'Rozliczenie usług tylko na podstawie Faktury VAT',
      'Elastyczne terminy płatności.',
      'Gwarantujemy brak ukrytych kosztów.',
      'Odciążamy twoje działy HR i Księgowość.',
      'Posiadamy polisę ubezpieczeniową na 2 000 000 złotych, gwarantującą pokrycie ewentualnych szkód w trakcie świadczenia naszych usług.',
    ],
  },
  {
    title: 'Wielostronna obsługa',
    description: [
      'Legalizacja pobytu i pracy.',
      'Obsługa kadrowo-płacowa.',
      'Szkolenia zawodowe',
      'Szkolenia BHP',
      'Pomoc przy uzyskaniu niezbędnych certyfikatów',
    ],
  },
]

export const Benefits = () => {
  return (
    <section className="page_section">
      <h2 className="page_title">Dlaczego właśnie my?</h2>

      <div className="grid grid-cols-3 gap-10 max-1150:grid-cols-2  max-950:grid-cols-1">
        {data.map((item) => (
          <Card
            {...item}
            key={item.title}
          />
        ))}
      </div>

      <p className="text-center text-muted-foreground text-xl mt-8">
        Naszym celem jest długofalowa współpraca na wzajemnie korzystnych
        warunkach.
      </p>
    </section>
  )
}

const Card = ({
  title,
  description,
}: {
  title: string
  description: string[]
}) => {
  return (
    <div className="cursor-pointer flex gap-5 border-l-4 border-muted-foreground rounded-lg p-6 bg-gradient-to-br from-gray-100 to-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <ul className="list-none p-0 m-0 text-gray-600">
          {description.map((item, index) => (
            <li
              key={index}
              className="flex items-start mb-2"
            >
              <span className="text-muted-foreground font-bold mr-2 mt-[-2px] text-lg">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
