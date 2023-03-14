import styles from './displayProduct.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
import { PrimaryButton, ButtonIconArrow } from '../buttons';
import { ProductSlide } from './productSlide';
import CardEffectComponent from './cardEffect';
import { Fade } from 'react-awesome-reveal';
export const DisplayProduct = () => {
    return (
        <>


            <div className={styles.product}>
                <div className={styles.product__content}>
                    <div className={styles.product__textContainer}>
                        <h1>Lebih Modern & Stylish</h1>
                        <p className={styles.product__tag}>Product</p>
                        <p className={styles.product__text}>Tambahkan sentuhan modern dan stylish pada gaya Anda dengan produk handcraft buatan Lokalize. Dibuat dengan cinta oleh pengrajin lokal terbaik, produk kami menawarkan kesempatan untuk mengekspresikan kreativitas Anda dengan gaya yang unik dan eksklusif. Dukung industri kreatif lokal dan gunakan produk handcraft Lokalize untuk tampil beda!</p>
                        <button className={styles.product__button}>Explore</button>
                    </div>
                    <CardEffectComponent className={styles.product__cardComponent} />
                </div>
                <img src="../../lineEffect.svg" alt="lineEffect" className={styles.product__bg} />
            </div>
        </>
    )
}
