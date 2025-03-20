import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quick Pitch Deal",
  description: "A community of the next generation of entrepreneurs and operators gaining collective access to top tier investment opportunities.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      }
    ]
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
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
} 