
import styles from '../styles/signin.module.scss';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import { LoginInput } from '../components/inputs/loginInput';
import { Navbar } from '@/components/header/Navbar';
import { useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { Provider } from 'react-redux';
import Image from 'next/image';
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from "react-icons/hi";
import { ButtonIconArrow, SecondaryButton } from '@/components/buttons';
const initialValues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
    message: "",
};

const index = ({ providers }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setUser({ ...user, [name]: value });
    }
    console.log(providers);
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
                        className={styles.mediumSvg}
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
                                            <ButtonIconArrow type={"button"} text={"Masuk"} icon={HiHome} routes={"/"} />
                                            <div className={styles.forgot}>
                                                <Link href="/forget">Forgot Pasword ?</Link>
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>

                        <hr /> Or continue with <hr />

                        <div className={styles.other}>
                            {providers.map((provider) => {
                                if (provider.name == "Credentials") {
                                    return;
                                }
                                return (
                                    <div key={provider.name}>
                                        <button
                                            className={styles.socials__btn}
                                            onClick={() => signIn(provider.id)}
                                        >
                                            <Image
                                                className={styles.u__bounceInDown}
                                                src={`/providers/${provider.id}.png`}
                                                width={30}
                                                height={30}
                                                alt="provider icon"
                                            />
                                            Signin with {provider.name}
                                        </button>
                                    </div>
                                );
                            })
                            }
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
                                                name="name"
                                                icon="user"
                                                placeholder="Full Name"
                                                onChange={handleChange}
                                            />
                                            <LoginInput
                                                type="text"
                                                name="email"
                                                icon="email"
                                                placeholder="Email Address"
                                                onChange={handleChange}
                                            />
                                            <LoginInput
                                                type="password"
                                                name="password"
                                                icon="password"
                                                placeholder="Password"
                                                onChange={handleChange}
                                            />
                                            <LoginInput
                                                type="password"
                                                name="conf_password"
                                                icon="password"
                                                placeholder="Re-Type Password"
                                                onChange={handleChange}
                                            />
                                            <SecondaryButton type={"button"} text={"Daftar"} routes={"#"} />
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
export async function getServerSideProps(content) {
    const providers = Object.values(await getProviders());
    console.log(providers);
    return {
        props: {
            providers,
        }
    }
}


export default index