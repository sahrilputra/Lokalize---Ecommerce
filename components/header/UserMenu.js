import styles from './styles.module.scss'
import Link from 'next/link';
import { signOut, signIn } from 'next-auth/react'


export const UserMenu = ({session}) => {
    return (
        <>
        <div className={styles.menu}>
            <div className={styles.menu__contaienr}>
                <div className={styles.menu__profile}>

                </div>
                <h1>Hello Bestie,</h1>
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

            <div className={styles.flex}>
                <button className={styles.btn__primary}></button>
                <button className={styles.btn__secondary}></button>
            </div>
        </div>
        </>
    )
}
