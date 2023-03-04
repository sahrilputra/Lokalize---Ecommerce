import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Navbar } from '@/components/header/Navbar'
import { Mainsection } from '@/components/main/mainsection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Mainsection />
    </>
  )
}
