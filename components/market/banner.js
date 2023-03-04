import React from 'react'
import styles from '../market/styles.module.scss';
import Image from 'next/image';
export const Banner = () => {
  return (
    <>
    <div className={styles.banner}>
        <img src="/banner/banner_ads.png" alt="banner" />

    <Image 
    src="/banner/banner_ads.png" 
    width={250}
    height={50}
    alt="tes"
    />
    </div>
    </>
  )
}
