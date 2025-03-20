import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quick Pitch Deal",
  description: "A community of the next generation of entrepreneurs and operators gaining collective access to top tier investment opportunities.",
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
} 