
import './globals.css'
import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],weight:['100','200','300','400','500','600','700'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'This is the simple frontend of the application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning className={poppins.className}>
          <div className="">
            {children}
          </div>
      </body>
    </html>
  )
}
