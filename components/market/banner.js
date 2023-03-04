import React from 'react'
import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
export const Banner = () => {
    return (
        <>
        <div className={styles.banner}>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <img src="/banner/banner_ads.png" alt="banner" />
                    <img src="/banner/banner_ads.png" alt="banner" />
                </Carousel>
            </div>
            <div className={styles.banner}>
                <img src="/banner/banner_ads.png" alt="banner" />
            </div>
        </div>
        </>
    )
}
