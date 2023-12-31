import './globals.css'
import './reset.css'
import type { Metadata } from 'next'
import cx from 'classnames';
import { DotGothic16, New_Tegomin } from 'next/font/google'

const new_Tegomin = New_Tegomin({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tegomin',
});
const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dotGot',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cx(dotGothic16.variable, new_Tegomin.variable)}
      >{children}</body>
    </html>
  )
}
