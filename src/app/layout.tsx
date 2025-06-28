import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next Projects',
  description: 'apcodesphere learning next, chai 🤦🏽‍♂️🙆🏽‍♂️',
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
