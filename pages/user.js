/* eslint-disable @next/next/no-img-element */
import styles from '../styles/user.module.scss'
import { Navbar } from '@/components/header/Navbar'
import { InformationMenus } from '@/components/user/information';
import { DashboardMenu } from '@/components/user/dashboard';
import { useState } from 'react';
import { BiHomeAlt, BiMenu, BiInfoCircle, BiReset, BiShoppingBag, BiChevronLeft } from "react-icons/bi";
import { OrderComponent } from '@/components/user/order';

const User = () => {

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__menu}>
                    <div className={styles.user__head}>
                        <img src="../../avatar.png" alt=""
                            className={styles.user__avatar}
                        />
                        <div className={styles.user__avatarText}>
                            <p className={styles.user__name}>Hello Bestie,</p>
                            <p className={styles.user__member}>member sejak 1954</p>
                        </div>
                    </div>
                    <ul>
                        <li onClick={() => handleMenuClick("dashboard")}><BiHomeAlt />Dashboard <BiMenu /></li>
                        <li onClick={() => handleMenuClick("information")}><BiInfoCircle />Informasi</li>
                        <li onClick={() => handleMenuClick("order")}><BiShoppingBag />Order</li>
                    </ul>
                </div>
                
                {activeMenu === 'information' && <InformationMenus />}
                {activeMenu === 'dashboard' && <DashboardMenu/>}
                {activeMenu === 'order' && <OrderComponent/>}
            </div>
        </>
    )
}

export default User