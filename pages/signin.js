
import styles from '../styles/signin.module.scss';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import { LoginInput } from '../components/inputs/loginInput';
import { Navbar } from '@/components/header/Navbar';
import { useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { Provider } from 'react-redux';
import Image from 'next/image';


const index = () => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setUser({ ...user, [name]: value });
    }
    console.log(handleChange);
    return (
        <>
        <Navbar />
        <div className={styles.component}>
                    <div className={styles.component__large}>
                        <Image
                        src="/component/component__large.svg" 
                        alt="componentLarge"
                        width={400}
                        height={400}
                        />
                    </div>
                    <div className={styles.component__medium}>
                        <Image
                        class={styles.mediumSvg}
                        src="/component/component__medium.svg" 
                        alt="componentLarge"
                        width={400}
                        height={400}
                        />
                    </div>
                </div>
            <div className={styles.container}>
            
                <div className={styles.login}>
                    <div className={styles.login__container}>
                        <h1>Masuk</h1>
                        <div className={styles.form}>
                            <Formik>
                                {
                                    (form) => (
                                        <Form>
                                            <LoginInput
                                                type="text"
                                                name="login_email"
                                                icon="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                            />
                                            <LoginInput
                                                type="password"
                                                name="login_password"
                                                icon="password"
                                                placeholder="Password"
                                                onChange={handleChange}
                                            />
                                            <button className={styles.button__primary} type="type" text="Sign in" >Masuk</button>
                                            <div className={styles.forgot}>
                                                <Link href="/forget">Forgot Pasword ?</Link>
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>

                        <hr /> Or <hr />
                        <div className={styles.other}>
                            <div className={styles.providers}>
                                <Image 
                                src="/providers/google.png"
                                alt="github icon"
                                width={30}
                                height={30}
                                />
                                <p>Google</p>
                            </div>
                            <div className={styles.providers}>
                                <Image 
                                src="/providers/github.png"
                                alt="github icon"
                                width={30}
                                height={30}
                                />
                                <p>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.signup}>
                    <div className={styles.signup__container}>
                        <h1>Daftar</h1>
                        <div className={styles.form}>
                            <Formik>
                                {
                                    (form) => (
                                        <Form>
                                            <LoginInput
                                                type="text"
                                                name="login_email"
                                                icon="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                            />
                                            <LoginInput
                                                type="password"
                                                name="login_password"
                                                icon="password"
                                                placeholder="Password"
                                                onChange={handleChange}
                                            />
                                            <button type="type" text="Sign in" >Sing in</button>
                                            <div className={styles.forgot}>
                                                <Link href="/forget">Forgot Pasword ?</Link>
                                            </div>
                                            
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index