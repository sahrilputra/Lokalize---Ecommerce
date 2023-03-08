import React from 'react'
import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import data from '../../models/data'
import { Modal, Card } from 'flowbite-react';
import { QuickView } from './quickView';
import { useState } from 'react';
export const CardComponent = () => {
  console.log(data);
  const item = data.item;

  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
    setShowing(true);
    setTimeout(() => {
      setShowing(false);
    }, 3000);
  }
  return (
    <>

      <div className={styles.market}>
        <h3 className={styles.market__tag}>Discover</h3>
        <div className={styles.market__container}>
          <div className={styles.market__menuSection}>
            <div className={styles.market__item}>
              <Image
                src="/market/all.png"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item}>
              <Image
                src="/market/tas_item.svg"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item}>
              <Image
                src="/market/baju_item.svg"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item}>
              <Image
                src="/market/hiasan.png"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
          </div>

          <div className={styles.market__card}>
            {item.map((tas) => {
              return (
                <>
                  <div className={styles.item}>
                    <img className={styles.imgContainer} src={`${tas.image_url}`} alt="" />
                    <div className={styles.item_text}>
                      <div className={styles.item_icon}>
                        <HiOutlineHeart className={styles.heartIcon} />
                      </div>
                      <h3 className={styles.card__title} onClick={toggleMenu}>
                        {tas.name}
                      </h3>
                      <div className={styles.item_param}>
                        <p className={styles.itemDesk}>
                          {tas.description}
                        </p>
                      </div>
                      <div className={styles.itemBawah}>
                        <div className={styles.itemCartIcon}>
                          <HiOutlineShoppingCart className={styles.cartIcon} />
                        </div>
                        <h3 className={styles.prices}>Rp.{tas.price}</h3>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}
