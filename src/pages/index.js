import Image from 'next/image'
import Head from 'next/head'
import Root from '@/components'
import { Inter } from 'next/font/google'
import { Icon } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>
          Colin FitzGerald
        </title>
        <link rel="icon" href='https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg'></link>
      </Head>
      <Root/>
    </main>
  )
}
