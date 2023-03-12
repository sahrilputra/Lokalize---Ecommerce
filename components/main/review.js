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
        <>
            <div className={styles.review}>


                <div className={styles.review__wrapper}>
                    <div className={styles.review__head}>
                        <h1>Kata Mereka</h1>
                        <p className={styles.review__tag}>Review</p>
                    </div>
                    <p className={styles.review__param}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium aperiam sed nisi exercitationem ea numquam distinctio debitis itaque dignissimos.</p>
                </div>

                <div className={styles.review__container}>
                    <div className={styles.review__card1}>
                        <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                        <p className={styles.review__cardReview}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis.</p>
                        <p className={styles.review__nama}>Nama Orang</p>
                    </div>
                    <div className={styles.review__flex}>
                        <div className={styles.review__card2}>
                            <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                            <p className={styles.review__cardReview}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis.</p>
                            <p className={styles.review__nama}>Nama Orang</p>
                        </div>
                        <div className={styles.review__card2}>
                            <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                            <p className={styles.review__cardReview}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis.</p>
                            <p className={styles.review__nama}>Nama Orang</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
