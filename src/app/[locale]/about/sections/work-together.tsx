import { ContactFormModal } from '@/components/modals/contact-form'
import { Button } from '@/components/ui/button'
import { FaUsersGear } from 'react-icons/fa6'

const sectionData = {
  introText:
    'Zdejmij z siebie ciężar czasochłonnego poszukiwania i zatrudniania pracowników.',
  subIntroText: 'Skorzystaj z naszych elastycznych rozwiązań.',
  steps: [
    {
      number: 1,
      text: 'Analizujemy Twoje potrzeby na podstawie naszego doświadczenia i aktualnych badań rynku, aby opracować optymalny model współpracy.',
    },
    {
      number: 2,
      text: 'Wspólnie z Tobą ustalamy warunki współpracy, procedury oraz terminy realizacji powierzonych zadań.',
    },
    {
      number: 3,
      text: 'Uwzględniając Twoje wymagania, prowadzimy kompleksowy proces rekrutacji kandydatów z odpowiednimi kwalifikacjami i doświadczeniem. Cała praca leży po naszej stronie. Dla Ciebie liczy się tylko rezultat.',
    },
    {
      number: 4,
      text: 'Przygotowujemy kandydatów, zatrudniamy ich zgodnie z przepisami prawa, przeprowadzamy szkolenie BHP oraz badania lekarskie.',
    },
    {
      number: 5,
      text: 'Terminowo rozliczamy i wypłacamy wynagrodzenia, przygotowujemy raporty dla ZUS i US, organizujemy urlopy, wystawiamy zaświadczenia, pokrywamy koszty. Poniesiemy pełną odpowiedzialność za wszystkie wydatki związane z przestrzeganiem przepisów prawa.',
    },
    {
      number: 6,
      text: 'Na regularnych spotkaniach przedstawiamy raporty z pracy, proponujemy usprawnienia i uzgadniamy dalsze działania w celu zaspokojenia krótko- i długoterminowych potrzeb klienta.',
    },
  ],
}

export const WorkTogether = () => {
  return (
    <section className="bg-gray-100 rounded-4xl text-gray-800 page_section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <FaUsersGear className="text-brand w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            {sectionData.introText}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            {sectionData.subIntroText}
          </p>
        </div>

        <div className=" relative">
          {sectionData.steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex items-start pb-8 md:pb-12"
            >
              {i !== sectionData.steps.length - 1 && (
                <div className="absolute top-12 left-6 -translate-x-1/2 w-0.5 h-full bg-brand/20 z-0"></div>
              )}
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-full bg-brand text-white font-bold flex items-center justify-center text-lg z-10">
                  {step.number}
                </div>
              </div>

              <div className="ml-6">
                <p className="text-lg text-gray-700">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Wypełnij formularz, a my się z Tobą skontaktujemy!
          </h3>

          <ContactFormModal>
            <Button
              className="bg-brand"
              size="xl"
            >
              WYPEŁNIJ FORMULARZ
            </Button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  )
}
