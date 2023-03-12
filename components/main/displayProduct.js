import styles from '../main/styles.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
import { PrimaryButton, ButtonIconArrow } from '../buttons';
import { ProductSlide } from './productSlide';
import CardEffectComponent from './cardEffect';

export const DisplayProduct = () => {
    return (

        <div id="content" className={styles.product}>

            <div className={styles.product__heading}>
                <h1>Boost your STYLE</h1>
            </div>
            <div className={styles.product__absolute}>
                <h2>STYLE</h2>
            </div>
            <div className={styles.product__mainContainer}>
                <CardEffectComponent className={styles.product__display}/>
                <CardEffectComponent />
                {/* <div className={styles.product__content}>
                    <h3 className={styles.product__content__title}>Product Kami</h3>
                    <p className={styles.product__content__param}>Jelajahi lebih dalam produk unggulan kami di lokalize</p>
                    <div className={styles.product__content__button}>
                        <PrimaryButton className type="primary Button" text={"Explore market"} routes={"/market"} />
                    </div>
                    <ProductSlide />
                </div> */}
            </div>
        </div>
    )
}
