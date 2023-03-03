import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Navbar } from '@/components/header/Navbar'
import { HeroSection } from '@/components/main/HeroSection'
import { Content } from '@/components/main/content'
import { DisplayProduct } from '@/components/main/displayProduct'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <Content />
    <DisplayProduct />
    </>
  )
}
