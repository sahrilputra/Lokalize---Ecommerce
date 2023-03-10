import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/solid';

function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                {selectedOption}
                                <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                                        <CheckIcon className="w-5 h-5 text-blue-500" aria-hidden="true" />
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

export default DropdownMenu;
