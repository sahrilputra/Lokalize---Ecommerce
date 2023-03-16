import { Fragment } from 'react';
import styles from './cartmenu.module.scss'
import { BiDownArrow, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { Card, Checkbox } from 'flowbite-react';
import Image from 'next/image';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { useState } from 'react';
import { PrimaryButton } from '../buttons';


export const CartItem = ({ item, onClose, title, image}) => {

    let [count, setCount] = useState(1);
    const [visible, setVisible] = useState(true);
    let [harga, setharga] = useState(30000);
    let [total, setTotal] = useState(0);


    function incrementCount() {
        harga = harga + harga;
        count = count + 1;
        total = total + harga;
        setharga(harga);
        setCount(count);
        setTotal(total);

    }
    function decrementCount() {
        if (count > 1) {
            harga = harga - harga;
            count = count - 1;
            setharga(harga);
            setCount(count);
        }
    }

    return (
        <>
            <Transition show={visible}>

                <div className={styles.cartMenu} id='menus' >
                    <h1 className='text-left'>Keranjang saya</h1>
                    <div className={styles.grid}>
                        <div className={styles.imgContainer}>
                            <Image
                                src="/img_hero.png"
                                alt="cart image"
                                width={120}
                                height={120}
                            />
                            <div className={styles.none}>
                                <Checkbox className={styles.checkBox} />
                            </div>

                        </div>

                        <div className={styles.flex}>
                            <p>Outer Batik</p>
                            <p className='font-light'>coklat</p>
                            <p>Rp{harga}</p>
                            <span className={` flex flex-row mt-3 justify-between`}>
                                <button className='w-6 bg-slate-500 rounded-l-lg text-white' onClick={decrementCount} > <BiMinus /></button>
                                <span className='w-9 bg-slate-300'>{count}</span>
                                <button className='w-6  bg-slate-500 text-white rounded-r-lg' onClick={incrementCount}> <BiPlus /> </button>
                            </span>
                            <BiTrash className={styles.trashIcon} />
                        </div>

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.imgContainer}>
                            <Image
                                src="/img_hero.png"
                                alt="cart image"
                                width={120}
                                height={120}
                            />
                            <div className={styles.none}>
                                <Checkbox className={styles.checkBox} />
                            </div>

                        </div>

                        <div className={styles.flex}>
                            <p>Tas Rajut</p>
                            <p className='font-light'>Hijau</p>
                            <p>Rp{harga}</p>
                            <span className={` flex flex-row mt-3 justify-between`}>
                                <button className='w-6 bg-slate-500 rounded-l-lg text-white' onClick={decrementCount} > <BiMinus /></button>
                                <span className='w-9 bg-slate-300'>{count}</span>
                                <button className='w-6  bg-slate-500 text-white rounded-r-lg' onClick={incrementCount}> <BiPlus /> </button>
                            </span>
                            <BiTrash className={styles.trashIcon} />
                        </div>

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.imgContainer}>
                            <Image
                                src="/img_hero.png"
                                alt="cart image"
                                width={120}
                                height={120}
                            />
                            <div className={styles.none}>
                                <Checkbox className={styles.checkBox} />
                            </div>

                        </div>

                        <div className={styles.flex}>
                            <p>Name Product</p>
                            <p className='font-light'>Gantungan Kunci</p>
                            <p>Rp{harga}</p>
                            <span className={` flex flex-row mt-3 justify-between`}>
                                <button className='w-6 bg-slate-500 rounded-l-lg text-white' onClick={decrementCount} > <BiMinus /></button>
                                <span className='w-9 bg-slate-300'>{count}</span>
                                <button className='w-6  bg-slate-500 text-white rounded-r-lg' onClick={incrementCount}> <BiPlus /> </button>
                            </span>
                            <BiTrash className={styles.trashIcon} />
                        </div>

                    </div>

                    <div className={styles.grid}>
                        <div className={styles.checker}>
                            <Checkbox id="remember" />
                            <br />
                            Semua
                        </div>

                        <div className={styles.text}>
                            <p className='text-'>Total : </p>
                            <p> Rp. {total}</p>
                        </div>
                    </div>

                    <PrimaryButton text={"Checkout"} type={""} routes={"#"} />
                </div>
            </Transition>
        </>
    )
}
