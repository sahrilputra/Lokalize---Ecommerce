/* eslint-disable @next/next/no-img-element */
import { Breadcrumb } from "flowbite-react"
import styles from '../styles/order.module.scss'
import { HiHome } from "react-icons/hi"
import { IoLocation } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";
import { Navbar } from "@/components/header/Navbar"
const Order = () => {

    return (
        <>
            <Navbar />
            <div className={styles.order}>
                <div className={styles.breadCumbContainer}>
                    <Breadcrumb aria-label="breadcrumb">
                        <Breadcrumb.Item
                            href="/"
                            icon={HiHome}
                        >
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Market
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Order
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className={styles.order__head}>
                    <h2>Checkout</h2>
                </div>

                <div className={styles.order__container}>
                    <div className={styles.order__cardWidth}>
                        <h2 className={styles.order__flex}>< IoLocation /> Alamat Pengiriman</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa, ducimus cumque repudiandae temporibus nesciunt repellendus quidem totam fugit in.</p>
                    </div>

                    <div className={styles.order__cardWidth}>
                        <h2 className={styles.order__flex}>< RiShoppingBagFill /> Item anda</h2>
                        <div className={styles.order__grid}>
                            <div className={styles.order__item}>
                                <img src="../../product/bagOne.png" alt="item 1" />
                                <div className={styles.order__flexColumn}>
                                    <h3>Tas Motif</h3>
                                    <p>Warna: Coklat</p>
                                    <h3>Rp.50.000</h3>
                                    <h2>x1</h2>
                                </div>
                            </div>
                            <div className={styles.order__item}>
                                <img src="../../product/bagOne.png" alt="item 1" />
                                <div className={styles.order__flexColumn}>
                                    <h3>Tas Motif</h3>
                                    <p>Warna: Coklat</p>
                                    <h3>Rp.50.000</h3>
                                    <h2>x1</h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.order__total}>
                            <h3>Ongkos Kirim : Rp.20.000</h3>
                            <h2>Total : Rp.120.000</h2>
                        </div>

                        <div className={styles.order__last}>
                            <p>apakah data diatas sudah benar?</p>
                            <button className={styles.button_next}>bayar</button>
                        </div>
                    </div>
                </div>

                <img src="../../bluryEffect.svg" alt="" className={styles.cover}/>
            </div>
        </>
    )
}

export default Order
