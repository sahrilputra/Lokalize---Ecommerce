import styles from "./styles.module.scss"
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
const ButtonIconArrow = ({
    type,
    text,
    icon,
    routes
}) => {
    return (
    <Link href={routes}>
        <buton className={styles.button} type={type} >
            <span>{text}</span>
            <div className={styles.svg__wrap}>
                <BiRightArrowAlt />
            </div>
        </buton>
        </Link>
    )
}


const SecondaryButton = ({
    type,
    text,
    routes,
}) => {
    return (
        <buton className={styles.secondaryButton} type={type} >
            <span>{text}</span>
            <Link href={routes}></Link>
        </buton>
    )
}


const PrimaryButton = ({
    type,
    text,
    routes,
}) => {
    return (
        <Link href={routes}>
        <buton className={styles.primaryButton} type={type} >
            <span>{text}</span>
        </buton>
        </Link>
    )
}

export { ButtonIconArrow, PrimaryButton, SecondaryButton }