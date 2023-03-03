import styles from '../main/styles.module.scss';
import Image from 'next/image'
export const DisplayProduct = () => {
    return (
        <div className={styles.product}>
            <div className={styles.product__heading}>
                <h1>Boost your STYLE</h1>
            </div>
            <div className={styles.product__absolute}>
                <h2>STYLE</h2>
            </div>
            <div className={styles.product__mainContainer}>
                <div className={styles.product__card__container}>
                <div className={styles.product__card}>
                    <div className={styles.product__card__image}>
                        <Image
                            className={styles.product__display}
                            src="/product/display1.png"
                            width={280}
                            height={280}
                            alt="Image Component"
                        />
                    </div>
                    <div className={styles.product__card__title}>
                        <h3 className={styles.product__card__heading}>NAME</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, animi?</p>
                        <p>Rp. 24.000</p>
                    </div>
                </div>
                
                
                </div>
                <div className={styles.product__content}>
                    <h3 className={styles.product__content__title}>Product Kami</h3>
                    <p className={styles.product__content__param}>Jelajahi lebih dalam produk unggulan kami di lokalize</p>
                    <div className={styles.product__content__button}>
                        <button className={styles.greenButton} placehoder="explore">explore</button>
                    </div>
                    <div className={styles.product__content__display}>
                        <div className={styles.product__content__img}>
                            <Image
                                className={styles.product__content__product}
                                src="/product/display1.png"
                                width={100}
                                height={100}
                                alt="Image Component"
                            />
                        </div>
                        <div className={styles.product__content__img}>
                            <Image
                                className={styles.product__content__product}
                                src="/product/display1.png"
                                width={100}
                                height={100}
                                alt="Image Component"
                            />
                        </div>
                        <div className={styles.product__content__img}>
                            <Image
                                className={styles.product__content__product}
                                src="/product/display1.png"
                                width={100}
                                height={100}
                                alt="Image Component"
                            />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
