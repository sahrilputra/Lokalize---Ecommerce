import styles from '../header/styles.module.scss';
import Link from 'next/link';
import { BiHeart, BiShoppingBag } from "react-icons/bi";
export const Navbar = () => {
    // const { data: session } = useSession()
    // const [visible, setVisible,] = useState(false);
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
                        <li className={styles.nav__right__li} tabIndex={0}><BiHeart /> </li>
                        <li className={styles.nav__right__li} tabIndex={0}><BiShoppingBag /></li>
                        <li className={`${styles.nav__right__li} ${styles.nav__profile}`} tabIndex={0} 
                         onMouseOver={() => setVisible(true)}
                         onMouseLeave={() => setVisible(false)}
                        >

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
