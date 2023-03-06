/* eslint-disable @next/next/no-img-element */
import styles from '../header/styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { UserMenu } from './UserMenu';
import { useState } from 'react';
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { useSession } from 'next-auth/react';


export const Navbar = () => {
  
    const { data: session } = useSession();
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
                            <Link href="/">
                                <BiHeart />
                            </Link>
                        </li>
                        <li className={`${styles.nav__right__li} ${styles.icon}`} tabIndex={0}>
                            <Link href="/">
                                <BiShoppingBag />
                            </Link>

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
                            visible && <UserMenu session={session}/>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
