import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Milo Social Media App',
  description: 'Social media app built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <div className='w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <Navbar />
        </div>
        <div className='bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          {children}
        </div>
      </body>
    </html>
  )
}
