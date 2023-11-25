import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scott McMahon | Site Reliability Engineer (SRE)',
  description: 'I have 6 years experience working in developer roles including junior developer and application support. I have also began my journey in DevOps SRE, acheiving my certification from The DevOps Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
