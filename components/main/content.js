/* eslint-disable @next/next/no-img-element */
import styles from './content.module.scss'
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
export const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content__logo}>
                <img src="../../icon.svg"
                    alt="lokalize Logo"
                    className={styles.content__lokalize} 
                />

                <img src="../../popArt.svg" 
                alt="popArts" 
                className={styles.content__pop}
                />
            </div>

            <div className={styles.content__wrap}>
                <h1 className={styles.content__head}>Tentang Kami</h1>
                <p className={styles.content__tag}>LOKALIZE</p>
                <p className={styles.content__text}>Lokalize adalah platform yang menghubungkan penjual dan pembeli hasil kerajinan tangan dari UMKM yang berbasis di Indonesia. Lokalize dibuat untuk mempermudah para pedagang UMKM untuk memperluas jangkauan dagang dan memudahkan pembeli untuk membeli kerajinan dari suatu daerah tertentu.
                    Produk kerajinan yang ditawarkan pun beragam, mulai dari berbagai macam tas, sandal, kain batik, dan masih banyak lagi. Produk tersebut dibuat dengan kekhasan daerah masing-masing dan dibuat dengan bahan yang berkualitas.
                </p>
            </div>

            <img src="../../blob.svg" alt="blob element" 
            className={styles.content__blob}
            />
        </div>
    )
}
