import React from 'react'
import { Card } from 'flowbite-react'
import { useState } from 'react';
import styles from './modal.module.scss'

export const QuickView = ({ data }) => {

    const [visible, setVisible] = useState(true);
    const [showing, setShowing] = useState(false);
    const toggleMenu = () => {
        setVisible(!visible);
        setShowing(true);
        setTimeout(() => {
            setShowing(false);
        }, 3000);
    }
    return (
        <>
            <div className={styles.modal}>
                <button onClick={toggleMenu}> {data.name} </button>
            </div>
        </>
    )
}
