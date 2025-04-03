import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "APS Limbiate - Assistenza Pratiche e Servizi (CAF e Patronato)",
  description:
    "Centro assistenza fiscale e patronato a Limbiate. Servizi CAF, dichiarazione dei redditi, ISEE, pensioni e molto altro.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'