import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeaderMenu } from '@/components/header'
import { Mainsection } from '@/components/main/mainsection'
import { FooterElement } from '@/components/footer/footer'
const inter = Inter({ subsets: ['latin'] })
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
    <HeaderMenu/>
    <Mainsection /> <br />
    <FooterElement />
    </>
  )
}
