/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './cartmenu.module.scss'
import { BiDownArrow, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { Card, Checkbox } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import { PrimaryButton } from '../buttons';

export const FavoriteMenu = ({ favoriteItem }) => {

    console.log(favoriteItem);
    return (
        <>
            <div className={styles.favMenu} id='menus'>
                <h1 className='text-left'>Favorite</h1>

                {favoriteItem && favoriteItem.length > 0 ?
                    (
                        favoriteItem.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className={styles.grid}>
                                        <div className={styles.imgContainer}>
                                            <img className={styles.imgContainer} src={`${item.image_url}`} alt="item image" />

                                        </div>
                                        <div className={styles.flex}>
                                            <p>{item.name}</p>
                                            <p className='font-light'>{item.color}</p>
                                            <span className={` flex flex-row mt-3 justify-between`}>
                                                <button className=' bg-slate-300 p-2 rounded-lg font-light '>Add to Cart</button>
                                            </span>
                                            <BiTrash className={styles.trashIcon} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    ) : (
                        <h1>Kosong</h1>
                    )

                }


            </div>
        </>
    )
}
