"use client"

import { SessionProvider } from "next-auth/react"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SessionProvider>
        {children}
      </SessionProvider>
    </section>
  )
}