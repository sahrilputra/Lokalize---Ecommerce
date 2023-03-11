import React from 'react'

import { Fragment } from 'react';
import { Card } from 'flowbite-react'
import { useState } from 'react';
import styles from './modal.module.scss'
import Link from 'next/link';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Select } from '@mui/material';
import { BiX, BiHeart } from "react-icons/bi";
import { HiOutlineHeart, HiOutlineShoppingCart, HiHeart } from "react-icons/hi"
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineCheck } from "react-icons/ai";


export const QuickView = ({ open, onClose, title, image, description }) => {


    const pageSizes = [
        { id: "S", name: "Small" },
        { id: "M", name: "Medium" },
        { id: "L", name: "Large" },
        { id: "XL", name: "Extra Large" },
    ];
    console.log(pageSizes);

    const [selectedSize, setSelectedSize] = useState(pageSizes[0]);

    const handleSizeChange = (value) => {
        setSelectedSize(value);
    };

    const [likeItem, setLiked] = useState([]);
    const [fillFavorite, setFill] = useState(false);

    const handleLikedItem = (item) => {
        if (likeItem.includes(item)) {
            setLiked(likeItem.filter((title) => title !== item));
            setFill(!fillFavorite);
        } else {
            setLiked([...likeItem, item]);
        }
    }
    const isLiked = likeItem.includes(title);
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
                                <img src={image} alt="Gambar Modal" className="h-80 w-auto mx-auto" />
                                {isLiked ? (
                                    <HiHeart className={`${styles.likedIcon} animate__animated animate__tada
                                    absolute right-0 mr-6 bottom-2 text-3xl `} onClick={() => handleLikedItem(title)} />
                                ) : (
                                    <HiOutlineHeart className={`${styles.heartIcon}
                                    absolute right-0 mr-6 bottom-2 text-3xl`} onClick={() => handleLikedItem(title)} />
                                )
                                }
                            </div>
                            <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 ml-8 p-4 ">
                                {title}
                            </Dialog.Title>
                            <div>
                                {description}
                            </div>

                            {/* ukuran  */}
                            <div>
                                <p>Pilih Ukuran</p>
                                <Listbox value={selectedSize} onChange={handleSizeChange}>
                                    <div className="relative w-32">
                                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                                            <span className="block truncate">{selectedSize ? selectedSize.name : 'Pilih Ukuran'}</span>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                <FiChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </Listbox.Button>
                                        <Listbox.Options
                                            className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                        >
                                            {pageSizes.map((size) => (
                                                <Listbox.Option
                                                    key={size.id}
                                                    className={({ active }) =>
                                                        (
                                                            active ? 'text-white bg-teal-600' : 'text-gray-900',
                                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={size}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span className={
                                                                (selected ? 'font-medium' : 
                                                                'font-normal', 'block truncate')}>
                                                                {size.name}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={
                                                                        (
                                                                        active ? 'text-white' : 'text-teal-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                                                                    <AiOutlineCheck className="w-5 h-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </div>
                                </Listbox>
                            </div>
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
