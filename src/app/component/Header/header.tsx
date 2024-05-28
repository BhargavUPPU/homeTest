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
    const items = [
        
            
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
                    <div className="hidden container mx-auto fle justify-end md:flex gap-4 md:w-full" id="navbar-default">

                        <Button label="Make a Payment" severity="secondary" outlined icon="pi pi-dollar"  onClick={() => { router.push("/auth/payment-login") }} />
                        <Button label="Log In" severity="secondary"  icon="pi pi-user" className="mb-3 md:mb-0 " onClick={() => { router.push("/auth/sign-in") }} />
                        <SplitButton label="Register" model={items} className="cursor-default"  />

                        </div>
                </div>

            </nav>
        </header>

    </>;
};

export default Header;
