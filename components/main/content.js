import styles from '../main/styles.module.scss';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
export const Content = () => {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.content__container}>
                    {/* 
                    <div className={styles.content__container_new}>
                        <div className={styles.wrap}>
                        <img src="../../lokalizeBg.svg" 
                        alt="" 
                        className={styles.image_bg}
                        />
                        </div>
                        <img src="../../Title.svg" 
                        alt=""
                        className={styles.image_title}
                        />
                    </div> */}

                    <div className={styles.content__svg}>
                        <Fade>
                        <Image
                            className={styles.content__img}
                            src="/component/about.png"
                            width={280}
                            height={280}
                            alt="Image Component"
                        />
                        </Fade>
                    </div>

                    <div className={styles.content__text}>
                        <Slide delay={100} direction='right'>
                            <div className={styles.content__heading}>
                                <h2 className={styles.content__absolute}>ABOUT</h2>
                            </div>
                        </Slide>
                        <div className={styles.content__param}>
                            <Fade delay={200} cascade>
                            <h1>Tentang Kami</h1>
                            <p>
                                Lokalize adalah platform yang menghubungkan penjual dan pembeli hasil kerajinan tangan dari UMKM yang berbasis di Indonesia. Lokalize dibuat untuk mempermudah para pedagang UMKM untuk memperluas jangkauan dagang dan memudahkan pembeli untuk membeli kerajinan dari suatu daerah tertentu.
                                <br>
                                </br>
                                Produk kerajinan yang ditawarkan pun beragam, mulai dari berbagai macam tas, sandal, kain batik, dan masih banyak lagi. Produk tersebut dibuat dengan kekhasan daerah masing-masing dan dibuat dengan bahan yang berkualitas.
                            </p>
                            </Fade>
                            <div className={styles.content__ciclreSvg}>
                                <Image
                                    className={styles.content__circle}
                                    src="/component/circle.svg"
                                    width={50}
                                    height={50}
                                    alt="circle Component"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
