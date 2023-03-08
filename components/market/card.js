import React from 'react'
import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import data from '../../models/dataTas'
import { Modal, Card } from 'flowbite-react';
import { QuickView } from './quickView';
import { useState } from 'react';
export const CardComponent = () => {
  console.log(data);
  const item = data.tas;

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
                src="/market/baju_item.svg"
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
                  <div className={styles.market__card__item}>
                    <div className={styles.market__card__image}>
                      <Image
                        src="/product/display1.png"
                        alt="baju icon"
                        width={240}
                        height={180}
                      />
                    </div>
                    <div className={styles.market__card__text}>
                      <div className={styles.market__card__icon}>
                        <HiOutlineHeart className={styles.heartIcon} />
                      </div>
                      <h3 className={styles.market__card__title} onClick={toggleMenu}> 
                      {tas.name}
                      </h3>
                      {
                            visible && <QuickView data={tas}/>
                      }
                        <div className={styles.market__card__param}>
                          <p className={styles.market__card__description}>
                            {tas.description}
                          </p>
                        </div>
                        <div className={styles.market__card__harga}>
                          <div className={styles.card__marketIcon}>
                            <HiOutlineShoppingCart className={styles.cartIcon} />
                          </div>
                          <h3>Rp.{tas.price}</h3>
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
