import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'AliBuild',
  description: 'Live in the best conditions.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </head>
      
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
