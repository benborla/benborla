'use client'

import { NextUIProvider } from '@nextui-org/react'
import NavBar from '../components/NavBar'

export default function NextUI({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center bg-black py-5">
        <div className="container flex flex-col gap-2 md:gap-12 lg:gap-12">
          <NavBar />
          {children}
        </div>
      </main>
    </NextUIProvider>
  )
}
