import React from 'react'
import styles from './cartmenu.module.scss'
import { BiDownArrow, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { Card, Checkbox } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import { PrimaryButton } from '../buttons';

export const FavoriteMenu = () => {
    return (
        <>
            <p><BiDownArrow /></p>
            <div className={styles.favMenu} id='menus'>
                <h1 className='text-left'>Favorite</h1>

                <div className={styles.grid}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/img_hero.png"
                            alt="cart image"
                            width={120}
                            height={120}
                        />

                    </div>

                    <div className={styles.flex}>
                        <p>Name Product</p>
                        <p className='font-light'>Motif Kembang Rupa</p>
                        <span className={` flex flex-row mt-3 justify-between`}>
                            <button className=' bg-slate-300 p-2 rounded-lg font-light '>Add to Cart</button>
                        </span>
                        <BiTrash className={styles.trashIcon} />
                    </div>

                </div>

            </div>
        </>
    )
}
