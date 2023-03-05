import styles from '../market/styles.module.scss';

import { Breadcrumb } from 'flowbite-react'
import { HiHome } from "react-icons/hi";
export const BreadCrumbsElement = () => {
    return (
        <>
            <div className={styles.breadcrumbs}>
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item
                        href="/"
                        icon={HiHome}
                    >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Market
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </>

    )
}
