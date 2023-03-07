import styles from '../main/styles.module.scss';
import Image from 'next/image';
export const Content = () => {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.content__container}>
                    <div className={styles.content__svg}>
                        <Image
                            className={styles.content__img}
                            src="/component/about.png"
                            width={280}
                            height={280}
                            alt="Image Component"
                        />
                    </div>

                    <div className={styles.content__text}>
                        <div className={styles.content__heading}>
                            <h2 className={styles.content__absolute}>ABOUT</h2>
                        </div>
                        <div className={styles.content__param}>
                            <h1>Tentang Kami</h1>
                            <p>
                                Lokalize adalah platform yang menghubungkan penjual dan pembeli hasil kerajinan tangan dari UMKM yang berbasis di Indonesia. Lokalize dibuat untuk mempermudah para pedagang UMKM untuk memperluas jangkauan dagang dan memudahkan pembeli untuk membeli kerajinan dari suatu daerah tertentu.
                                <br>
                                </br>
                                Produk kerajinan yang ditawarkan pun beragam, mulai dari berbagai macam tas, sandal, kain batik, dan masih banyak lagi. Produk tersebut dibuat dengan kekhasan daerah masing-masing dan dibuat dengan bahan yang berkualitas.
                            </p>
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
