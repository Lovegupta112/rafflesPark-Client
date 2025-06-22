import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raffles Park',
  description: 'Raffles Park Villas in Bangalore. Experience luxury living in Whitefield with world-class amenities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
