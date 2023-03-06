import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeaderMenu } from '@/components/header'
import { Mainsection } from '@/components/main/mainsection'
import { FooterElement } from '@/components/footer/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeaderMenu/>
    <Mainsection /> <br />
    <FooterElement />
    </>
  )
}
