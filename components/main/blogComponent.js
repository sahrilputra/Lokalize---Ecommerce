/* eslint-disable @next/next/no-img-element */
import styles from './blog.module.scss'
export const BlogComponent = () => {
    return (
        <>
            <div className={styles.blog}>
                <div className={styles.blog__wrap}>
                    <div className={styles.blog__text}>
                        <h1 className={styles.blog__heading}>Freshy Idea</h1>
                        <p className={styles.blog__tag}>Blog</p>
                        <h2>Kami bangga mempersembahkan kumpulan artikel menarik tentang produk handcraft berkualitas dari Lokalize. Lihat koleksi kami hari ini!</h2>
                    </div>
                    <div className={styles.blog__content}>
                        <div className={styles.blog__artikel}>
                            <img src="https://wallpaperaccess.com/full/5121052.jpg" alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, totam.</p>
                        </div>
                        <div className={styles.blog__artikel}>
                            <img src="https://wallpaperaccess.com/full/5121052.jpg" alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, totam.</p>
                        </div>
                        <div className={styles.blog__artikel}>
                            <img src="https://wallpaperaccess.com/full/5121052.jpg" alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, totam.</p>
                        </div>
                        <div className={styles.blog__artikel}>
                            <img src="https://wallpaperaccess.com/full/5121052.jpg" alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, totam.</p>
                        </div>
                    </div>
                </div>

                <img src="../../patternBig.svg" alt="pattern" 
                className={styles.blog__pattern}/>
            </div>
        </>
    )
}
