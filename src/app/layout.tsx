import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import FormspreeWrapper from '@/components/FormspreeWrapper'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quick Pitch Deal - Exclusive Business Opportunities",
  description:
    "Get the best deals delivered to your inbox. Quick Pitch Deal connects you with exclusive business and investment opportunities.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <FormspreeWrapper>
          {children}
        </FormspreeWrapper>
      </body>
    </html>
  )
} 