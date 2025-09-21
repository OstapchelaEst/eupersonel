import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import {
  Benefits,
  Hero,
  Legalization,
  Partners,
  Services,
  WorkTogether,
  WorkTogetherIntroduction,
} from './sections'

export default async function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col inner_layout">
      <Header />
      <main className="flex-1 py-6">
        <Hero />

        <Services />

        <Partners />

        <Benefits />

        <WorkTogether />

        <WorkTogetherIntroduction />

        <Legalization />
      </main>
      <Footer />
    </div>
  )
}
