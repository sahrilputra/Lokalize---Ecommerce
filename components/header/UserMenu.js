import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { signOut, signIn } from 'next-auth/react'
import { useState } from 'react';

export const UserMenu = ({ session }) => {
    const [loggedIn, setLogged] = useState(true);
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menu__contaienr}>
                    {loggedIn ? (
                        <>
                            <div className={styles.menu__profile}>
                                <Image
                                    src="/img_hero.png"
                                    className={styles.avatar}
                                    alt='avatar'
                                    width={80}
                                    height={80} />
                            </div><h1>Hello Lokalize,</h1>
                        </>
                    ) : (
                        <>
                        <div className={styles.menu__profile}>
                            <Image
                                src="/avatar.png"
                                className={styles.avatar}
                                alt='avatar'
                                width={80}
                                height={80} />
                        </div><h1>Hello Bestie,</h1>
                    </>

                    )

                    }

                </div>
                <ul>
                    <li>
                        <Link href="#">Account</Link>
                    </li>
                    <li>
                        <Link href="#">Order</Link>
                    </li>
                    <li>
                        <Link href="#">Setting</Link>
                    </li>
                </ul>

                <div className={styles.btn}>
                    {loggedIn ? (
                         <button className={styles.btn__secondary}>Sign out</button>
                    ):(
                        <>
                        <button className={styles.btn__primary}>Sign in</button>
                        <button className={styles.btn__secondary}>Register</button>
                        </>
                    )}
                  
                </div>
            </div>
        </>
    )
}
