/* eslint-disable @next/next/no-img-element */

import styles from './banner.module.scss'
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
export const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className="mt-28 h-32 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000} >

                        <img src="../../banner/banner_ads.png"
                            alt="banner ads"
                            className={styles.ads} />

                        <img src="../../banner/banner_ads.png"
                            alt="banner ads"
                            className={styles.ads} />
                    </Carousel>
                </div>
            </div>
        </>
    )
}
