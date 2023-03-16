import React from 'react'

import { Fragment } from 'react';
import { Card } from 'flowbite-react'
import { useState, useEffect } from 'react';
import styles from './modal.module.scss'
import Link from 'next/link';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Select } from '@mui/material';
import { BiX, BiHeart } from "react-icons/bi";
import { HiOutlineHeart, HiOutlineShoppingCart, HiHeart } from "react-icons/hi"
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineCheck } from "react-icons/ai";
import { BiDownArrow, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { FiXCircle, FiInfo, FiShoppingCart } from "react-icons/fi";
import { CartItem } from '../header/cartItem';
export const QuickView = ({ open, onClose, title, image, description }) => {

    // ======== counting item
    let [count, setCount] = useState(1);
    const [visible, setVisible] = useState(false);
    let [harga, setharga] = useState(30000);
    let [total, setTotal] = useState(0);
    function incrementCount() {
        harga = harga + harga;
        count = count + 1;
        total = total + harga;
        setharga(harga);
        setCount(count);
        setTotal(total);
    }
    function decrementCount() {
        if (count > 1) {
            harga = harga - harga;
            count = count - 1;
            setharga(harga);
            setCount(count);
        }
    }

    // =========== size 
    const pageSizes = [
        { id: "S", name: "Small" },
        { id: "M", name: "Medium" },
        { id: "L", name: "Large" },
        { id: "XL", name: "Extra Large" },
    ];
    console.log(pageSizes);

    const [selectedSize, setSelectedSize] = useState(pageSizes[0]);

    const handleSizeChange = (value) => {
        if (selectedSize + value < 1) {
            setSelectedSize(1);
        } else {
            setSelectedSize(selectedSize + value);
        }
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
    // === button group 
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("");
    const [sendItem, setSendItem] = ([]);

    useEffect(() => {
        if (activeButton !== "") {
            const timeout = setTimeout(() => setActiveButton(""), 2000);
            return () => clearTimeout(timeout);
        }
    }, [activeButton]);


    const isLiked = likeItem.includes(title);
    return (

        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className={`fixed inset-0 z-10 overflow-y-auto ${styles.Dialog}`}
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
                        <div className="inline-block w-full max-w-md my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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
                            <div className=' ml-5 p-1 font-light text-gray-500 text-sm text-center '>
                                {description}
                            </div>

                            {/* ukuran  */}
                            <div className={` ${styles.pickItemContainer} flex flex-row justify-center gap-5`}>
                                <div className={styles.listBoxContainer}>
                                    <p className={` ${styles.headingList} font-semibold text-base text-gray-600`}>Pilih Ukuran</p>
                                    <Listbox value={selectedSize} onChange={handleSizeChange} className={`flex justtify-center text-center mx-auto ${styles.listBoxParent}`}>
                                        <div className={`${styles.listBox}relative w-32 m-auto`}>
                                            <Listbox.Button className="relative w-20 py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-solid border-2 border-gray-300">
                                                <span className="block truncate">{selectedSize ? selectedSize.id : 'Pilih Ukuran'}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <FiChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>
                                            <Listbox.Options
                                                className="absolute z-10 w-20 py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
                                                                    {size.id}
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

                                <div className={styles.buttonGroup}>
                                    <p className=" font-semibold text-base text-gray-600">Jumlah : </p>
                                    <span className={` flex flex-row mt-1 justify-between w-16 text-center h-8`}>
                                        <button className='w-14 bg-slate-500 rounded-l-lg text-white' onClick={decrementCount} > <BiMinus /></button>
                                        <span className='w-16 bg-slate-300 align-middle text-center'>{count}</span>
                                        <button className='w-14  bg-slate-500 text-white rounded-r-lg' onClick={incrementCount}> <BiPlus /> </button>
                                    </span>
                                </div>
                            </div>

                            <div className={` relative right-0 text-lg font-semibold w-2/3 mx-auto p-2 mt-6${styles.total}`}>
                                <p>Total : </p>
                                Rp. 129.000
                            </div>

                            {/* button group */}
                            <>
                                <div className="flex justify-center pt-8 pb-10">
                                    <button
                                        onClick={onClose}
                                        className="mr-4 px-4 py-2 font-medium text-white bg-red-500 rounded-md"
                                    >
                                        <FiXCircle className="inline-block mr-2" />
                                        Cancel
                                    </button>

                                    <Link href="/detail">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="mr-4 px-4 py-2 font-medium text-white bg-blue-500 rounded-md"
                                        >
                                            <FiInfo className="inline-block mr-2" />
                                            Detail
                                        </button>

                                    </Link>
                                    <button
                                        onClick={() => setActiveButton("checkout")}
                                        className="px-4 py-2 font-medium text-white bg-green-500 rounded-md"
                                    >
                                        <FiShoppingCart className="inline-block mr-2" />
                                        Add to Cart

                                        {
                                           visible &&  <CartItem open={visible} title={(title)}  />
                                        }
                                    </button>

                                    {activeButton === "cancel" && (
                                        <div className="absolute top-0 right-0 mr-4 mb-4">
                                            <div className="bg-red-500 text-white text-sm p-2 rounded-md shadow-md">
                                                Cancel button clicked
                                            </div>
                                        </div>
                                    )}

                                    {activeButton === "checkout" && (
                                        <div className="absolute top-0 right-0 mr-4 mb-4">
                                            <div className="bg-green-500 text-white text-sm p-2 rounded-md shadow-md">
                                                Berhasil di tambahkan ke cart
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
