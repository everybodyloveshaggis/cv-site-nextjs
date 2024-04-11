import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Header from '../components/header'
import ActiveSessionContextProvider from '../context/active-session-context'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scott McMahon | Site Reliability Engineer (SRE)',
  description: 'I have 6 years experience working in developer roles including junior developer and application support. I have also began my journey in DevOps SRE, acheiving my certification from The DevOps Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.7rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ActiveSessionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='bottom-center'/>
        </ActiveSessionContextProvider>
        </body>
    </html>
  );
}
