import Nav from '../components/nav/nav'
import './globals.css'
import Head from './head'
import {ReactNode} from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head/>
      <body>
        <Nav/>
        <div className='container mx-auto'>
        {children}
        </div>
      </body>
    </html>
  )
}
