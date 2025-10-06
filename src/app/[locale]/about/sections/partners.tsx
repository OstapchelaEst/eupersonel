import Image from 'next/image'

const partners = [
  {
    name: 'Intermarche',
    logo: '/partners/intermarche.svg',
    link: 'https://intermarche.pl',
  },
  { name: 'Smaro', logo: '/partners/maro.svg', link: 'https://maro.eu' },
  { name: 'Stofix', logo: '/partners/stofix.png', link: 'https://stofix.com' },
  {
    name: 'IDLogistics',
    logo: '/partners/id-logistics.svg',
    link: 'https://www.id-logistics.com/pl',
  },
]

export const Partners = () => {
  return (
    <section className="page_section">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 ">
          Nasi partnerzy
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-850:gap-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer group relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                <Image
                  width={400}
                  height={384}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0" //
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
