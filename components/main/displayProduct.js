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
                <div className={styles.product__card__container}>
                    <CardEffectComponent />
                    {/* <div className={styles.product__card}>
                        <Carousel indicators={false} slideInterval={5000}>
                            <div className={styles.product__card__image}>
                                <Image
                                    className={styles.product__display}
                                    src="/product/display1.png"
                                    width={280}
                                    height={280}
                                    alt="Image Component"
                                />
                                <div className={styles.product__card__title}>
                                    <h3 className={styles.product__card__heading}>Tas Batik</h3>
                                    <p className={styles.product__card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, animi?</p>
                                    <p className={styles.product__card__money}>Rp. 24.000</p>
                                </div>
                            </div>
                            <div className={styles.product__card__image}>
                                <Image
                                    className={styles.product__display}
                                    src="/product/bagOne.png"
                                    width={240}
                                    height={240}
                                    alt="Image Component"
                                />
                                <div className={styles.product__card__title}>
                                    <h3 className={styles.product__card__heading}>Tas Motif</h3>
                                    <p className={styles.product__card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, animi?</p>
                                    <p className={styles.product__card__money}>Rp. 24.000</p>
                                </div>
                            </div>
                        </Carousel>
                    </div> */}

                </div>
                <div className={styles.product__content}>
                    <h3 className={styles.product__content__title}>Product Kami</h3>
                    <p className={styles.product__content__param}>Jelajahi lebih dalam produk unggulan kami di lokalize</p>
                    <div className={styles.product__content__button}>
                        <PrimaryButton className type="primary Button" text={"Explore market"} routes={"/market"} />
                    </div>
                    <ProductSlide />
                </div>
            </div>
        </div>
    )
}
