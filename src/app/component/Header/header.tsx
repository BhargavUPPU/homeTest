'use client';
import Link from "next/link";
import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useRouter } from "next/navigation";
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { useState, useEffect } from "react";
import Logo from "../core/logo";
import { Divider } from 'primereact/divider';
import { SplitButton } from 'primereact/splitbutton';

import { Sidebar } from 'primereact/sidebar';
const Header = ({ handleHidden }: { handleHidden: any }) => {
    const [scroll, setScroll] = useState(false); // Change the initial state to boolean
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []); // Add an empty dependency array to useEffect
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [isHighRegisterlighted, setIsHighRegisterlighted] = useState(false);
    const highlightFeatureClass = isHighlighted ? "p-menuitem-active" : "";
    const highlightRegisterClass = isHighRegisterlighted ? "p-menuitem-active" : "";
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const leftmenuItems = [{
        label: 'Features',
        className: highlightFeatureClass,
        command: () => router.push("/#features"),
        template: (item: { label: string, target?: string }, options: any) => { // Add the 'target' property to the type definition of the 'item' parameter
            return (
                /* custom element */
                <a className={classNames(options.className)} onMouseEnter={() => setIsHighlighted(true)}
                    target={item.target} onClick={options.onClick}>
                    <span className={options.labelClassName}>{item.label}</span>
                </a>
            );
        },
    },
    {
        label: 'Pricing',
        className: "mx-2",
        command: () => router.push("/#pricing")
    },
    {
        label: 'About',
        className: "m-2",
        command: () => router.push("/auth/payment-login")
    },
    {
        label: 'Blog',
        className: "mx-2",
        command: () => router.push("/auth/payment-login")
    },
    {
        label: 'Contact',
        className: "mx-2",
        command: () => router.push("/#contact")
    },];
    const items = [
        // {
        //     label: 'Make a Payment',
        //     icon: 'pi pi-dollar',
        //     className: "ml-2 whitespace-nowrap",
        //     command: () => router.push("/auth/login")
        // },
        // {
        //     label: 'Log In',
        //     icon: 'pi pi-user',
        //     className: "mx-4 whitespace-nowrap",
        //     command: () => router.push("/auth/login")
        // },
        // {
        //     label: 'Register',
        //     className: highlightRegisterClass,
        //     template: (item, options) => {
        //         return (
        //             <a className="inline-block px-4 py-2 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out whitespace-nowrap" onMouseEnter={() => setIsHighRegisterlighted(true)} >{item.label} <i className="pi pi-angle-down align-middle"></i></a>
        //         );
        //     },
        //     items: [
        //         {
        //             label: 'Join Existing HOA',
        //             icon: 'pi pi-home',

        //             command: () => router.push("/auth/join/user")
        //         },
        //         {
        //             label: 'Create New HOA',
        //             icon: 'pi pi-plus',
        //             command: () => router.push("/auth/signup")
        //         }
        //     ]
        // },
        {
            label: 'Join Existing HOA',
            icon: 'pi pi-home',

            command: () => router.push("/auth/join/user")
        },
        {
            label: 'Create New HOA',
            icon: 'pi pi-plus',
            command: () => router.push("/auth/sign-up")
        }

    ];

    return <>
        <header className={scroll ? "bg-transparent sticky-bar stick" : "bg-transparent sticky-bar "}>
            <nav className="bg-white border-gray-200 px-4 sm:px-4 py-2.5 rounded ">
                <div className="container flex items-center justify-between mx-auto md:px-4 sm:px-4">
                    <div className="container flex flex-wrap items-center justify-between md:justify-start mx-auto">

                        <div className="hidden w-full md:block sm:shrink-1 sm:w-1/4 md:w-auto">
                            <ul className="flex flex-col grow p-4 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                                <Logo />
                                <li>
                                    <Link
                                        href="/#features"
                                        className="block text-base font-medium px-2 py-2 border-gray-200 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                                        aria-current="page">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#pricing"
                                        className="block text-base font-medium px-2 py-2 border-gray-200 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                                        Prices
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/auth/payment-login"
                                        className="block text-base font-medium px-2 py-2 border-gray-200 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/auth/payment-login"
                                        className="block text-base font-medium px-2 py-2 border-gray-200 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#contact"
                                        className="block text-base font-medium px-2 py-2 border-gray-200 rounded cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Button label="Log In" severity="secondary" size="small" icon="pi pi-user" text raised className="mb-3 md:mb-0 " onClick={() => { router.push("/auth/sign-in") }} />
                    {/* <div className='hidden sm:hidden flex gap-2 md:block'><Menubar model={items} className="mt-2" onMouseLeave={() => { setIsHighRegisterlighted(false) }} style={{ background: 'transparent', border: 0, padding: 0 }} /></div> */}

                </div>

            </nav>
        </header>

        {/* <header className={scroll ? "bg-transparent sticky-bar stick" : "bg-transparent sticky-bar "}>
            <div className='bg-white py-4 bg-transparent sticky-bar stick'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-12 gap-2 content-center'>
                        <div className='col-start-1 align-baseline'>
                            <Logo />
                        </div>
                        <div className='col-start-2 col-span-3'>
                            <Menubar model={leftmenuItems} onMouseLeave={() => { setIsHighlighted(false) }} style={{ background: 'transparent', border: 0, padding: 0 }} className="mx-10" />
                        </div>
                        <div className='col-end-12 col-span-3 justify-self-end'><Menubar model={items} className="mt-2" onMouseLeave={() => { setIsHighRegisterlighted(false) }} style={{ background: 'transparent', border: 0, padding: 0 }} /></div>
                    </div>
                </div>
            </div>
        </header> */}
    </>;
};

export default Header;
