import styles from './order.module.scss'
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { IconName } from "react-icons/bs";
import { BiEditAlt, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { BsWalletFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { Timeline } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { HiCalendar } from "react-icons/hi";

export const OrderComponent = () => {
    return (
        <>
            <div className={styles.dash}>
                <Link href="/market">
                    <div className={styles.dash__head}>

                        <BiChevronLeft className={styles.dash__back} />

                        <h2>Order</h2>
                    </div>
                </Link>

                <div className={styles.container}>
                    <div className={styles.container__head}>
                        <h1>Orderan</h1>
                        <p>Status Orderan Anda</p>
                    </div>

                    <div className={styles.container__item}>
                        <h3 className='mt-4 mb-2'>Sedang Berlangsung</h3>
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        February 2023
                                    </Timeline.Time>
                                    <Timeline.Title>
                                     Lorem ipsum dolor sit amet consectetur.
                                    </Timeline.Title>
                                    <Timeline.Body>
                                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, architecto!
                                    </Timeline.Body>
                                    <Button color="gray">
                                        Lihat Detail
                                        <BiChevronRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        March 2023
                                    </Timeline.Time>
                                    <Timeline.Title>
                                    Lorem ipsum dolor sit amet consectetur.
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iste.
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        April 2023
                                    </Timeline.Time>
                                    <Timeline.Title>
                                    Lorem ipsum dolor sit amet consectetur.
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias!
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>

            </div>
        </>
    )
}
