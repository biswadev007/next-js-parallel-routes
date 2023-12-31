import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import Header from '@/components/header'

export default function RootLayout({
  children,
  feeds,
  analytics
}: {
  children: React.ReactNode,
  feeds: React.ReactNode,
  analytics: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='flex min-h-screen flex-col items-center px-24 w-full'>
          <section className='py-6 w-full'>{children}</section>
          <section className='flex gap-6 w-full'>
            {feeds}
            {analytics}
          </section>
        </main>
      </body>
    </html>
  )
}
