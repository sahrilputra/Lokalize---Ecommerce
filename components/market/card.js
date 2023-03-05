import React from 'react'
import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
export const CardComponent = () => {
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
                <h3 className={styles.market__card__title}>Name Product</h3>
                <div className={styles.market__card__param}>
                  <p className={styles.market__card__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nesciunt!
                  </p>
                </div>
                <div className={styles.market__card__harga}>
                  <div className={styles.card__marketIcon}>
                    <HiOutlineShoppingCart className={styles.cartIcon} />
                  </div>
                  <h3>Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div className={styles.market__card__item}>
              <div className={styles.market__card__image}>
                <Image
                  src="/product/bagOne.png"
                  alt="baju icon"
                  width={240}
                  height={180}
                />
              </div>
              <div className={styles.market__card__text}>
                <div className={styles.market__card__icon}>
                  <HiOutlineHeart className={styles.heartIcon} />
                </div>
                <h3 className={styles.market__card__title}>Name Product</h3>
                <div className={styles.market__card__param}>
                  <p className={styles.market__card__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nesciunt!
                  </p>
                </div>
                <div className={styles.market__card__harga}>
                  <div className={styles.card__marketIcon}>
                    <HiOutlineShoppingCart className={styles.cartIcon} />
                  </div>
                  <h3>Rp. 20.000</h3>
                </div>
              </div>
            </div>
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
                <h3 className={styles.market__card__title}>Name Product</h3>
                <div className={styles.market__card__param}>
                  <p className={styles.market__card__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nesciunt!
                  </p>
                </div>
                <div className={styles.market__card__harga}>
                  <div className={styles.card__marketIcon}>
                    <HiOutlineShoppingCart className={styles.cartIcon} />
                  </div>
                  <h3>Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div className={styles.market__card__item}>
              <div className={styles.market__card__image}>
                <Image
                  src="/product/bagOne.png"
                  alt="baju icon"
                  width={240}
                  height={180}
                />
              </div>
              <div className={styles.market__card__text}>
                <div className={styles.market__card__icon}>
                  <HiOutlineHeart className={styles.heartIcon} />
                </div>
                <h3 className={styles.market__card__title}>Name Product</h3>
                <div className={styles.market__card__param}>
                  <p className={styles.market__card__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nesciunt!
                  </p>
                </div>
                <div className={styles.market__card__harga}>
                  <div className={styles.card__marketIcon}>
                    <HiOutlineShoppingCart className={styles.cartIcon} />
                  </div>
                  <h3>Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div className={styles.market__card__item}>
              <div className={styles.market__card__image}>
                <Image
                  src="/product/bagOne.png"
                  alt="baju icon"
                  width={240}
                  height={180}
                />
              </div>
              <div className={styles.market__card__text}>
                <div className={styles.market__card__icon}>
                  <HiOutlineHeart className={styles.heartIcon} />
                </div>
                <h3 className={styles.market__card__title}>Name Product</h3>
                <div className={styles.market__card__param}>
                  <p className={styles.market__card__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nesciunt!
                  </p>
                </div>
                <div className={styles.market__card__harga}>
                  <div className={styles.card__marketIcon}>
                    <HiOutlineShoppingCart className={styles.cartIcon} />
                  </div>
                  <h3>Rp. 20.000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
