/* eslint-disable @next/next/no-img-element */
import styles from './dashboard.module.scss'
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { IconName } from "react-icons/bs";
import { BiEditAlt, BiChevronLeft } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { BsWalletFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
export const DashboardMenu = () => {
    const handleChange = () => {

    }
    return (
        <>
            <div className={styles.dash}>
                <Link href="/market">
                    <div className={styles.dash__head}>

                        <BiChevronLeft className={styles.dash__back} />

                        <h2>Dashboard</h2>
                    </div>
                </Link>

                <div className={styles.container}>
                    <div className={styles.container__head}>
                        <h1>Dashboard Pengguna</h1>
                        <p>Dashboard Poin dan Ringkasan Akun</p>
                    </div>

                    <div className={styles.container__item}>
                        <div className={styles.container__flex}>
                            <div className={styles.container__card}>
                                <h2><BsWalletFill /></h2>
                                <h2>Total Pesanan</h2>
                                <h3>12 berhasil</h3>
                            </div>
                            <div className={styles.container__card}>
                                <h2><GiTwoCoins /></h2>
                                <h2>Coin</h2>
                                <h3>30.00 loka</h3>
                            </div>
                            <div className={styles.container__card}>
                                <h2><AiFillCheckSquare /></h2>
                                <h2>Berhasil</h2>
                                <h3>10</h3>
                            </div>
                            <div className={styles.container__card}>
                                <h2><AiFillCloseSquare /></h2>
                                <h2>Gagal</h2>
                                <h3>2</h3>
                            </div>
                        </div>

                        <h2 className='mt-8'>Kupon yang dimiliki</h2>
                        <p>Hemat uang dengan kupon-kupon eksklusif yang tersedia.</p>
                        <div className={styles.container__cupon}>
                            <div className={styles.conainer__text}>
                            
                                <h3> <IoTicket /> Cashback 10%</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis?</p>

                                <p className='text-right text-cyan-300 cursor-pointer font-semibold' >pakai?</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
