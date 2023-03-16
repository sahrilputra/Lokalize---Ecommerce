/* eslint-disable @next/next/no-img-element */
import styles from '../styles/user.module.scss'
import { Navbar } from '@/components/header/Navbar'
import { InformationMenus } from '@/components/user/information';
import { BiHomeAlt, BiMenu, BiInfoCircle, BiReset, BiShoppingBag, BiChevronLeft } from "react-icons/bi";
const User = () => {
    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__menu}>
                    <div className={styles.user__head}>
                        <img src="../../avatar.png" alt=""
                            className={styles.user__avatar}
                        />
                        <div className={styles.user__avatarText}>
                            <p className={styles.user__name}>Hello Sahril,</p>
                            <p className={styles.user__member}>member sejak 1954</p>
                        </div>
                    </div>
                    <ul>
                        <li><BiHomeAlt />Dashboard <BiMenu /></li>
                        <li><BiInfoCircle />Informasi</li>
                        <li><BiShoppingBag />Order</li>
                        <li><BiReset />Riwayat</li>

                    </ul>
                </div>

                <InformationMenus />
            </div>
        </>
    )
}

export default User