{/* <>
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
function CartModal() {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <div className="relative inline-block text-left z-9">
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                {selectedOption}

                                <FaChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                            </Menu.Button>
                        </span>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Menu.Items static className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {options.map((option) => (
                                        <Menu.Item key={option}>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} flex justify-between w-full px-4 py-2 text-sm font-medium`}
                                                    onClick={() => setSelectedOption(option)}
                                                >
                                                    <span>{option}</span>
                                                    {selectedOption === option && (
                                                        <FaCheck className="w-5 h-5 text-blue-500" aria-hidden="true" />
                                                    )}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}

export default CartModal;
</> */}
import React from 'react';
import { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

function DropdownMenuButton({ selectedOption, setSelectedOption }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('Red');
    const [selectedQty, setSelectedQty] = useState(1);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleQtyChange = (qty) => {
        setSelectedQty(qty);
    };

    const handleOkClick = () => {
        setSelectedOption(`${selectedColor} - ${selectedQty}`);
        setIsOpen(false);
    };

    const handleCancelClick = () => {
        setIsOpen(false);
    };

    return (
        <Popover className="relative inline-block">
            <Popover.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {selectedOption}
                <FaChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                show={isOpen}
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel
                    static
                    className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-3 px-4">
                        <label className="block font-medium text-gray-700">Color</label>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <input
                                    id="red"
                                    type="radio"
                                    name="color"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    checked={selectedColor === 'Red'}
                                    onChange={() => handleColorChange('Red')}
                                />
                                <label htmlFor="red" className="ml-3">
                                    <span className="block text-sm font-medium text-gray-700">Red</span>
                                </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    id="green"
                                    type="radio"
                                    name="color"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    checked={selectedColor === 'Green'}
                                    onChange={() => handleColorChange('Green')}
                                />
                                <label htmlFor="green" className="ml-3">
                                    <span className="block text-sm font-medium text-gray-700">Green</span>
                                </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    id="blue"
                                    type="radio"
                                    name="color"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    checked={selectedColor === 'Blue'}
                                    onChange={() => handleColorChange('Blue')}
                                />
                                <label htmlFor="blue" className="ml-3">
                                    <span className="block text-sm font-medium text-gray-700">Blue</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block font-medium text-gray-700">Quantity</label>
                            <div className="mt-2">
                                <div className="flex items-center">
                                    <input
                                        id="1"
                                        type="radio"
                                        name="quantity"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        checked={selectedQty === 1}
                                        onChange={() => handleQtyChange(1)}
                                    />
                                    <label htmlFor="1" className="ml-3">
                                        <span className="block text-sm font-medium text-gray-700">1</span>
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        id="2"
                                        type="radio"
                                        name="quantity"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        checked={selectedQty === 2}
                                        onChange={() => handleQtyChange(2)}
                                    />
                                    <label htmlFor="2" className="ml-3">
                                        <span className="block text-sm font-medium text-gray-700">2</span>
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        id="3"
                                        type="radio"
                                        name="quantity"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        checked={selectedQty === 3}
                                        onChange={() => handleQtyChange(3)}
                                    />
                                    <label htmlFor="3" className="ml-3">
                                        <span className="block text-sm font-medium text-gray-700">3</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleOkClick}
                            >
                                <FaCheck className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                OK
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default DropdownMenuButton;