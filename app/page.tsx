import { Footer, Hero } from '@/components'
import Features from '@/components/Features'
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

