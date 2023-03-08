import React from 'react'
import styles from './reviewer.module.scss'
import Image from 'next/image'
import { Card } from 'flowbite-react'
import { Carousel } from 'flowbite-react'
import data from '../../models/dataReview'
export const ReviewComponent = () => {
    console.log(data);
    const item = data.review;
    return (
        <div>
            <div className={styles.heading_review}>
                <h1>Review Mereka</h1>
            </div>
            <div className={styles.content__container}>
                {item.map((review) => {
                    return (
                        <>
                            <Card className={`max-w-sm m-auto ${styles.container}`}>
                                <div className={`${styles.review}`}>
                                    <div className={styles.review__card}>
                                        <div className={styles.flex}>
                                            <img
                                                className='bg-contain'
                                                src="https://asset.kompas.com/crops/qvQGS1vgF8FY7k9ylFHkmPd5l-Q=/0x0:0x0/750x500/data/photo/buku/61d440096969e.jpg" alt="" />
                                            <p className='text-black font-semibold pl-3'>{review.nama}</p>
                                        </div>
                                        <div className={`${styles.review__text}`}>
                                            <p className='font-semibold pt-3'>{review.produk}</p>
                                            <p className='font-light size pt-3 text-sm'>{review.deskripsi}</p>
                                            <p className='text-right'>Rating : {review.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </>
                    )
                })}
            </div>
        </div>

    )
}
