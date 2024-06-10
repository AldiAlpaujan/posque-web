"use client"

// MUI
import Box from "@mui/material/Box"

// thrid party
import { SessionProvider } from "next-auth/react"

// component
import AppWrapper from "@/persentation/component/template/AppWrapper";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box component={'main'}>
      <SessionProvider>
        <AppWrapper>
          {children}
        </AppWrapper>
      </SessionProvider>
    </Box>
  )
}