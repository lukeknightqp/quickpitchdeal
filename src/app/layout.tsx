import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quick Pitch Deal",
  description: "A community of the next generation of entrepreneurs and operators gaining collective access to top tier investment opportunities.",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32"
      }
    ],
    shortcut: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32"
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
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="32x32" />
      </head>
      <body>{children}</body>
    </html>
  )
} 