import styles from '../footer/styles.module.scss';

import { BsFacebook, BsTwitter, BsInstagram, BsDribbble, BsGithub } from "react-icons/bs";
import { Footer } from 'flowbite-react'
import Image from 'next/image';

export const FooterElement = () => {
    return (
        <>
        <div className={styles.footerComponent}>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Image
                                src="/icon.svg"
                                alt="lokalize logo"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="/">
                                        Lokalize
                                    </Footer.Link>
                                    <Footer.Link href="/https://github.com/sahrilputra">
                                        Sahril Putra
                                    </Footer.Link>
                                    <Footer.Link href="/https://github.com/sahrilputra">
                                        Yullita Irvene
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="/https://github.com/sahrilputra/newIfest-uaj">
                                        Github Repoo
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="lokalize™"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="/https://github.com/sahrilputra/newIfest-uaj"
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsDribbble}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
            </div>
        </>
    )
}
