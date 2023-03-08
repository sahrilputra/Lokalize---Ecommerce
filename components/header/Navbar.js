/* eslint-disable @next/next/no-img-element */
import styles from '../header/styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { UserMenu } from './UserMenu';
import { useState } from 'react';
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { useSession } from 'next-auth/react';
import { CartItem } from './cartItem';
import { FavoriteMenu } from './favoriteMenu';
export const Navbar = () => {

    const { data: session } = useSession();
    const [visible, setVisible] = useState(false);
    const [showing, setShowing] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const [favShowing, favMenu] = useState(false);
    const [cartVisible, setCartMenu] = useState(false);
    const [cartShowing, setCardMenu] = useState(false);

    const toggleFavorite = () => {
        favMenu(!favShowing);
        setCardMenu(true);
        setTimeout(() => {
            setCardMenu(false);
        }, 3000);
    }
    const toggleCart = () => {
        setCartMenu(!cartVisible);
        setCardMenu(true);
        setTimeout(() => {
            setCardMenu(false);
        }, 3000);
    }
    const toggleMenu = () => {
        setVisible(!visible);
        setShowing(true);
        setTimeout(() => {
            setShowing(false);
        }, 3000);
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.nav_left}>
                    <ul className={styles.nav__left__container}>

                        <li className={styles.nav__left__li}><Link href="/">Home</Link></li>
                        <li className={styles.nav__left__li}><Link href="/market">Market</Link></li>
                    </ul>
                </div>
                <div className={styles.nav__right}>
                    <ul className={styles.nav__right__container}>
                        <li className={`${styles.nav__right__li} ${styles.icon}`} tabIndex={0}>
                            <button className={styles.spanContainer}  onClick={toggleFavorite}>
                                <BiHeart />
                                <span className={styles.span_itemLove}>1</span>
                            </button>
                            {
                                favShowing && <FavoriteMenu/>
                            }
                        </li>
                        <li className={`${styles.nav__right__li} ${styles.icon}`} tabIndex={0}>
                            <button type='button' onClick={toggleCart}>
                                <BiShoppingBag />
                            </button>

                            {
                                cartVisible && <CartItem />
                            }
                        </li>
                        <li className={`${styles.nav__right__li} ${styles.nav__profile}`} tabIndex={0}
                            onClick={toggleMenu}
                        >
                            {session ? (
                                <span className={styles.li}>
                                    <div className={styles.avatarIcon}>
                                        <img className={styles.profileImg} src={session.user.image} alt="user icon" />
                                    </div>
                                </span>
                            ) : (
                                <span className={styles.li}>
                                    <div className={styles.avatarIcon}>
                                        <Image
                                            src="/avatar.png"
                                            alt="avatar icon"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                </span>
                            )
                            }
                        </li>
                        {
                            visible && <UserMenu session={session} />
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
