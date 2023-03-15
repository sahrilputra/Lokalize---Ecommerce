import React from 'react'
import styles from './reCard.module.scss'
export const ReCardComponent = () => {

  return (
    <div>

        <div className={styles.market}>
            <h1 className={styles.market__heading}>Seluruh Produk Kami</h1>
            <div className={styles.market__wrap}>
                <div className={styles.market__leftContent}>
                    <p>Category</p>
                    <ul>
                        <li>Semua</li>
                        <li>Pakian</li>
                        <li>Tas</li>
                        <li>Dekorasi</li>
                    </ul>
                </div>

                <div className={styles.market__product}>
                    <div className={styles.market__card}>
                        <img src="../../" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
