// src/components/Services.tsx
import Image from 'next/image'
import React from 'react'

const data = [
  {
    label: 'Rekrutacja',
    img: '/services/services-1.webp',
  },
  {
    label: 'Praca tymczasowa',
    img: '/services/services-2.webp',
  },
  {
    label: 'Outsourcing procesowy',
    img: '/services/services-3.webp',
  },
  {
    label: 'Legalizacja pobytu i zatrudnienia obcokrajowców',
    img: '/services/services-4.webp',
  },
]

interface ServiceCardProps {
  label: string
  img: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ label, img }) => {
  return (
    <div className="relative group overflow-hidden h-96 rounded-xl transition-all duration-500">
      <Image
        width={800}
        height={400}
        src={img}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors duration-500"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold mb-4 drop-shadow-md">{label}</h3>
        <button className="cursor-pointer self-start py-2 px-6 border-2 border-white text-white font-medium rounded-full transition-colors duration-300 hover:bg-white hover:text-gray-900">
          Więcej
        </button>
      </div>
    </div>
  )
}

const Services: React.FC = () => {
  return (
    <section className="page_section">
      <div className="max-w-7xl mx-auto">
        <h2 className="page_title">Nasze usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Services }
