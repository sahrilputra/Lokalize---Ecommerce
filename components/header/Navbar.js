import styles from '../header/styles.module.scss';
import { BiHeart, BiShoppingBag } from "react-icons/bi";
export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.nav_left}>
                    <ul className={styles.nav__left__container}>
                        <li className={styles.nav__left__li}><a href="#">Logo</a></li>
                        <li className={styles.nav__left__li}><a href="/market">Market</a></li>
                        <li className={styles.nav__left__li}><a href="#">Helo</a></li>
                    </ul>
                </div>
                <div className={styles.nav__right}>
                    <ul className={styles.nav__right__container}>
                        <li className={styles.nav__right__li} tabIndex={0}><BiHeart /> </li>
                        <li className={styles.nav__right__li} tabIndex={0}><BiShoppingBag /></li>
                        <li className={`${styles.nav__right__li} ${styles.nav__profile}`} tabIndex={0}></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
