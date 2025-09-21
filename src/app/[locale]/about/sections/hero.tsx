import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="page_section ">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-md">
              EUPERSONEL
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Witamy na naszej stronie! Jesteśmy firmą, która dąży do połączenia
              utalentowanych specjalistów z najlepszymi możliwościami na rynku
              pracy. Naszą misją jest uproszczenie procesu poszukiwania pracy i
              pomoc każdemu w odnalezieniu swojego powołania.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Wierzymy, że właściwa praca to nie tylko źródło dochodu, ale także
              sposób na realizację swojego potencjału i wniesienie wkładu we
              wspólne dobro. Nasze oferty pracy są starannie dobierane, abyś
              mógł znaleźć stanowisko, które idealnie odpowiada Twoim
              umiejętnościom i ambicjom.
            </p>

            <Button
              size="xl"
              className="w-fit"
            >
              Więcej
            </Button>
          </div>

          <div className="relative w-full h-96">
            <div className="absolute inset-0 bg-gray-200 rounded-3xl shadow-xl transform rotate-3 scale-105 origin-top-left"></div>
            <div className="absolute inset-0  border-2  border-gray-400 rounded-3xl z-20 flex items-center justify-center overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={300}
                height={384}
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
