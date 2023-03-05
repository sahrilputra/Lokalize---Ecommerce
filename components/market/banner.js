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
                        <Image
                            src="/banner/banner_ads.png"
                            alt="banner"
                        />
                        <Image
                            src="/banner/banner_ads.png"
                            alt="banner"
                        />
                    </Carousel>
                </div>
            </div>
        </>
    )
}
