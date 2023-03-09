import React from 'react'
import { Fragment } from 'react';
import { Card } from 'flowbite-react'
import { useState } from 'react';
import styles from './modal.module.scss'
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { BiX, BiHeart } from "react-icons/bi";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
export const QuickView = ({ open, onClose, title, image, description }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <button
                                type="button"
                                className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-500 cursor-pointer z-10"
                                onClick={onClose}
                            >
                                <BiX className="h-6 w-6" />
                            </button>
                            <div className="relative">
                                <img src={image} alt="Gambar Modal" className="h-96 w-auto mx-auto" />
                                <BsFillHeartFill className='absolute left-0 bottom-0 text-2xl cursor-pointer ml-8  
                                outline-red-400 fill-slate-200 
                                active:fill-red-500' />
                            </div>
                            <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 ml-8 p-4 ">
                                {title}
                            </Dialog.Title>
                            <Link href="/detail">
                                <div className="flex justify-end">
                                    <button className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-md shadow-lg transition-all duration-150 mr-0">
                                        <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 inline-block -mt-1 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                        Pergi ke Detail
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
