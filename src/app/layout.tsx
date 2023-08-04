import NextUI from './nextui-layout'
import './globals.css'
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Ben Borla | Web Developer',
  description: 'Sample title',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <NextUI>
          {children}
        </NextUI>
      </body>
    </html>
  )
}
