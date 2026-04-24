import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://berikesan.com'),
  title: 'Berikesan',
  description: 'Berikesan',
  openGraph: {
    title: 'Berikesan',
    description: 'Berikesan',
    images: [
      {
        url: '/logo-opengraph.png',
        width: 1000,
        height: 1000,
        alt: 'Berikesan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo-opengraph.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
