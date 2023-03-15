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
        <div classNmae={styles.contentReview}>
            <div className={styles.review}>


                <div className={styles.review__wrapper}>
                    <div className={styles.review__head}>
                        <h1>Kata Mereka</h1>
                        <p className={styles.review__tag}>Review</p>
                    </div>
                    <p className={styles.review__param}>Kata-kata positif dari pelanggan kami tentang produk handcraft Lokalize. Temukan produk berkualitas tinggi kami hari ini!.</p>
                </div>

                <div className={`${styles.review__container}`}>
                    <div className={styles.review__card1}>
                        <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                        <p className={styles.review__cardReview}>Saya sangat terkesan dengan produk handcraft dari Lokalize. Desainnya menggabungkan sentuhan modern dan tradisional yang menghasilkan produk-produk indah berkualitas tinggi.</p>
                        <div className={styles.review__pict}></div>
                        <div className={styles.review__rate}>
                            <p className={styles.review__rating}>Rating 4.5</p>
                            <p className={styles.review__nama}> Stepanus</p>
                        </div>

                    </div>
                    <div className={styles.review__flex}>
                        <div className={styles.review__card2}>
                            <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                            <p className={styles.review__cardReview}>Produk handcraft Lokalize sangat unik. Detailnya istimewa dan layak direkomendasikan</p>
                            <div className={styles.review__pict}></div>
                            <p className={styles.review__rating}>Rating 4.5</p>
                            <p className={styles.review__nama}> Cindy</p>
                        </div>
                        <div className={styles.review__card2}>
                            <p className={styles.review__cardTitle}>Kualitas Terbaik</p>
                            <p className={styles.review__cardReview}>Saya senang dengan Lokalize. Produknya sangat cantik dan menarik perhatian saya.</p>
                            <div className={styles.review__pict}></div>
                            <p className={styles.review__rating}>Rating 4.5</p>
                            <p className={styles.review__nama}> Cece</p>
                        </div>
                    </div>
                </div>
                <img src="../../smallBlury.svg" alt="" className={styles.imgAbsolute} />
            </div>

        </div>
    )
}
