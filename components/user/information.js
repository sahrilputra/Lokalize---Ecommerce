/* eslint-disable @next/next/no-img-element */
import styles from './information.module.scss'
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';

import { LoginInput } from '../inputs/loginInput';
import { HiHome } from "react-icons/hi";
import { ButtonIconArrow, SecondaryButton } from '@/components/buttons';
import { BiEditAlt, BiChevronLeft } from "react-icons/bi";
export const InformationMenus = () => {
    const handleChange = () => {

    }
    return (
        <>
            <div className={styles.information}>
            <Link href="/market">
                <div className={styles.information__head}>
                
                    <BiChevronLeft className={styles.information__back} />
                    <h2>Informasi</h2>
                </div>
                </Link>

                <div className={styles.container}>
                    <div className={styles.container__head}>
                        <h1>Informasi Pengguna</h1>
                        <p>Lengkapi informasi yang dibuhkan dibawah ini, agar dapat melengkapi data diri anda. anda dapat mengubahnya kapan saja</p>
                    </div>

                    <div className={styles.container__foto}>
                        <div className={styles.container__changePict}>
                            <img src="../../avatar.png" alt=""
                                className={styles.container__avatar} />
                            <BiEditAlt className={styles.container__Iconedit} />
                        </div>
                        <div className={styles.flexColumn}>
                            <h2>Ubah foto profil</h2>
                            <p>Klik foto untuk mengbuah foto profile anda</p>
                        </div>
                    </div>

                    <div className={styles.container__input}>
                        <Formik>
                            {
                                (form) => (
                                    <Form>
                                        <div className={styles.userName}>
                                            <h2>Username</h2>
                                            <LoginInput
                                                type="name"
                                                name="user_name"
                                                icon=""
                                                placeholder="User Name"
                                                onChange={handleChange}
                                                className={styles.formControl}
                                            />
                                        </div>
                                        <div className={styles.userName}>
                                            <h2>Nama</h2>
                                            <div className={styles.flex}>
                                                <LoginInput
                                                    type="name"
                                                    name="user_name"
                                                    icon=""
                                                    placeholder="Nama Depan"
                                                    onChange={handleChange}
                                                    className={styles.formControl}
                                                />
                                                <LoginInput
                                                    type="name"
                                                    name="user_name"
                                                    icon=""
                                                    placeholder="Nama Belakang"
                                                    onChange={handleChange}
                                                    className={styles.formControl}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.userName}>
                                            <h2>Alamat Email</h2>
                                            <LoginInput
                                                type="email"
                                                name="email"
                                                icon=""
                                                placeholder="Email"
                                                onChange={handleChange}
                                                className={styles.formControl}
                                            />
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
