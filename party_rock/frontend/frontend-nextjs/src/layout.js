export const metadata = {
  title: 'Miro Pro',
  description: 'Created by Miro Productions',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
