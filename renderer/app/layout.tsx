import '../styles/globals.css'

export const metadata = {
  title: 'Omnii',
  description: 'Omnii is a platform for creating and sharing AI agents',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
