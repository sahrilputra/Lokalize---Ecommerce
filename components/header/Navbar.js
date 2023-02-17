import styles from '../header/styles.module.scss';
import { BiHeart, BiShoppingBag } from "react-icons/bi";
export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.nav_left}>
                    <ul className={styles.nav__left__container}>
                        <li className={styles.nav__left__li}>Logo</li>
                        <li className={styles.nav__left__li}>Market</li>
                        <li className={styles.nav__left__li}>About</li>
                    </ul>
                </div>

                <div className={styles.nav__right}>
                    <ul className={styles.nav__right__container}>
                        <li className={styles.nav__right__li}><BiHeart /> </li>
                        <li className={styles.nav__right__li}><BiShoppingBag /></li>
                        <li className={`${styles.nav__right__li} ${styles.nav__profile}`}></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
