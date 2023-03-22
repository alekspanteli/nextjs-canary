import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({ 
  src: './Inter-VariableFont_slnt,wght.ttf',
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Linear app',
  description: 'My linear app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
