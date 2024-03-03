import { Features, Footer, Hero } from '@/components'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}

