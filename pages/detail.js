import { Card, Carousel } from "flowbite-react"
import React from 'react'
import styles from '../styles/detail.module.scss';
import { Navbar } from "@/components/header/Navbar";
import { Rating, Breadcrumb } from "flowbite-react";
import { ImLocation } from "react-icons/im";
import { HiHome, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
const Detail = () => {
    return (
        <>
            <Navbar className={styles.nav} />
            <br />
            <div></div>
            <div className={styles.detail}>
                <div className={styles.detail__bread}>
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            href="/"
                            icon={HiHome}
                        >
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/market">
                            Market
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Detail
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <h1 className={styles.detail__heading}>Product Details</h1>
                <div className={styles.detail__container}>
                    <div className={styles.detail__imgContent}>
                        <img src="../../product/bagOne.png" />
                        <div className={styles.flex}>
                            <button className={styles.addCart}> <HiOutlineShoppingCart />Cart</button>
                            <button className={styles.addFav}><HiOutlineHeart />Favorite</button>

                        </div>
                    </div>
                    <div className={styles.detail__information}>
                        <h2 className={styles.detail__name}>Tas Motif</h2>
                        <h3 className=' font-semibold text-lg m-3 p-2'>Rp. 50.000</h3>
                        <p className={styles.detail__location}><ImLocation /> Yogyakarta, Sleman</p>
                        <div className={styles.detail__content}>
                            <p className={styles.detail__deskripsi}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque odio quae asperiores id fugiat voluptate facilis facere itaque eaque nam, voluptatibus porro ab vel quisquam amet deleniti dignissimos sunt accusantium rem ea? Tempore hic sapiente odio necessitatibus? Quidem eligendi corporis iure perferendis? Tempora, facere aut? Excepturi libero quis, ea natus, repellendus, consequuntur architecto veniam ad dolore dolor alias commodi reiciendis harum voluptate deserunt iste sapiente saepe hic facilis error eveniet rem. Recusandae quia, repellendus cumque nulla minus harum? Quod, maiores..</p>
                            <p className={styles.detail__rating}>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                </Rating>
                                ratings : 4.5
                            </p>

                            <p>Category</p>
                            <p className={styles.detail__category}>tas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.review}>
                <Card className="mt-8">
                    <div className={styles.review__container}>
                    <div className={styles.review__rating}>
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>
                            <p>4.5</p>
                        </div>
                        <div className={styles.review__people}>
                            <HiOutlineUserCircle className={styles.avatar} />
                            <h2 className={styles.review__nama}>Muhammad Galuh</h2>
                            <div className={styles.review__temp}>
                                <p>07 February 2023</p>
                                <p className={styles.review__produk}>Tas Motif</p>
                            </div>
                        </div>
                        <div className={styles.review__content}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse nam corporis architecto illo aspernatur autem distinctio nisi eum laudantium, soluta quod quis inventore ut itaque, earum dolores nobis possimus sed, iure veniam cupiditate voluptatibus odio? Placeat dolorem ipsam modi?</p>
                        </div>
                     
                    </div>
                </Card>
                <Card className="mt-8">
                    <div className={styles.review__container}>
                    <div className={styles.review__rating}>
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>
                            <p>4.5</p>
                        </div>
                        <div className={styles.review__people}>
                            <HiOutlineUserCircle className={styles.avatar} />
                            <h2 className={styles.review__nama}>Icha Longinus Peuuma</h2>
                            <div className={styles.review__temp}>
                                <p>07 February 2023</p>
                                <p className={styles.review__produk}>Tas Motif</p>
                            </div>
                        </div>
                        <div className={styles.review__content}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse nam corporis architecto illo aspernatur autem distinctio nisi eum laudantium, soluta quod quis inventore ut itaque, earum dolores nobis possimus sed, iure veniam cupiditate voluptatibus odio? Placeat dolorem ipsam modi?</p>
                        </div>
                     
                    </div>
                </Card>
            </div>

        </>
    )
}

export default Detail