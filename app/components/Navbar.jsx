

"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";   // dropdown arrow icon

export default function Navbar() {

    // Mega menu open/close
    const [isOpen, setIsOpen] = useState(false);

    // Scroll behavior states
    const [lastScroll, setLastScroll] = useState(0);
    const [hideNav, setHideNav] = useState(false);

    // Reference for detecting click outside
    const menuRef = useRef(null);

    // Toggle Mega Menu
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    // Close menu manually
    function closeMenu() {
        setIsOpen(false);
    }

    // Close mega menu if click outside
    useEffect(function () {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Hide navbar when scrolling down
    // Show when scrolling up
    useEffect(function () {
        function handleScroll() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 70) {
                // scrolling down → hide navbar
                setHideNav(true);
            } else {
                // scrolling up → show navbar
                setHideNav(false);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener("scroll", handleScroll);

        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    return (
        <div>

            {/* NAVBAR */}
            {/* <nav
                className={
                    "fixed top-0 left-0 w-full z-50 bg-[#4D4D4D] text-white px-0 py-3 transition-transform duration-300  " +
                    (hideNav ? "-translate-y-full" : "translate-y-0")
                }
            > */}
            {/* <nav
                className={
                    "fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-[#8f7c45]/40 text-white px-0 py-3 transition-transform duration-300 " +
                    (hideNav ? "-translate-y-full" : "translate-y-0")
                }
            > */}

            <nav
                className={
                    "fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] text-white border-b-2 border-transparent [border-image:linear-gradient(to_right,#715723,#8f7c45)_1] px-0 py-3 transition-transform duration-300 " +
                    (hideNav ? "-translate-y-full" : "translate-y-0")
                }
            > 

                <div className="flex items-center justify-between max-w-8xl">

                    {/* Logo */}
                    <div className="text-lg font-bold cursor-pointer">
                        <Image
                            src="/logo.png"
                            alt="Website Logo"
                            width={80}
                            height={40}
                            priority
                        />
                    </div>

                    {/* Middle Menu */}
                    <div className="flex items-center gap-6 text-xl mr-10">

                        {/* Home */}
                        <div className="flex items-center gap-1 cursor-pointer hover:text-amber-300">
                            <FaHome size={26} />

                        </div>
                        <div className="cursor-pointer hover:text-amber-300">About Us</div>

                        {/* Products with dropdown arrow */}
                        <div className="cursor-pointer flex items-center gap-2 select-none hover:text-amber-300" onClick={toggleMenu}>
                            Products

                            {/* Dropdown arrow rotates when open */}
                            <FaChevronDown
                                className={
                                    "transition-transform duration-300 " +
                                    (isOpen ? "rotate-180" : "rotate-0")
                                }
                                size={13}
                            />
                        </div>

                        {/* Other menu items */}
                        <div className="cursor-pointer hover:text-amber-300">Signature Series</div>
                        <div className="cursor-pointer hover:text-amber-300">Blogs</div>
                        <div className="cursor-pointer hover:text-amber-300">Contact Us</div>


                    </div>

                </div>
            </nav>


            {/*FULL WIDTH MEGA MENU (Brother-style)*/}
            {isOpen && (
                <div className="absolute left-0 top-[100px] w-full bg-gray-200 text-black shadow-xl border-t z-40 animate-slideDown">

                    <div ref={menuRef} className="max-w-6xl mx-auto p-6 relative">

                        {/* Close button */}
                        <button
                            onClick={closeMenu}
                            className="absolute top-4 right-4 text-2xl hover:cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* 7-Column Jewellery Categories */}
                        <div className="grid grid-cols-4 gap-y-10">

                            {/* 1. Boundary Wall Gates */}
                            <div>
                                <h3 className="font-bold mb-3">Boundary Wall Doors</h3>
                                <Image
                                    src="/boundry-wall-gates.jpg"
                                    alt="Boundary Wall Gates"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Royal entrance</li>
                                    <li className="cursor-pointer hover:underline">Modern doors</li>
                                    <li className="cursor-pointer hover:underline">Ornamental iron doors</li>
                                    <li className="cursor-pointer hover:underline">Laser cut</li>
                                </ul>
                            </div>

                            {/* 2. Wrought Iron Doors */}
                            <div>
                                <h3 className="font-bold mb-3"> Brass Railings</h3>
                                <Image
                                    src="/wrought-iron-doors.png"
                                    alt="Wrought Iron Doors"
                                    width={130}
                                    height={120}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Single Door</li>
                                    <li className="cursor-pointer hover:underline">Double Door</li>
                                </ul>
                            </div>

                            {/* 3. Flat Entrance */}
                            <div>
                                <h3 className="font-bold mb-3">Staircase Railings</h3>
                                <Image
                                    src="/flat-entrance.png"
                                    alt="Flat Entrance"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Single Door</li>
                                    <li className="cursor-pointer hover:underline">Double Door</li>
                                </ul>
                            </div>

                            {/* 4. Staircase Railings */}
                            <div>
                                <h3 className="font-bold mb-3">Flat Entrance Doors</h3>
                                <Image
                                    src="/stair-case-railings.png"
                                    alt="Staircase Railings"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Modern</li>
                                    <li className="cursor-pointer hover:underline">Wrought iron</li>
                                    <li className="cursor-pointer hover:underline">Ornamental work</li>
                                </ul>
                            </div>

                            {/* 5. Balcony Railings */}
                            <div>
                                <h3 className="font-bold mb-3">Entry Doors</h3>
                                <Image
                                    src="/Balcony-railings.png"
                                    alt="Balcony Railings"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Modern</li>
                                    <li className="cursor-pointer hover:underline">Wrought iron</li>
                                    <li className="cursor-pointer hover:underline">Ornamental work</li>
                                </ul>
                            </div>

                            {/* 6. Modern Steel Doors */}
                            <div>
                                <h3 className="font-bold mb-3">Balcony Railings</h3>
                                <Image
                                    src="/modern-steel-doors.png"
                                    alt="Modern Steel Door"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Flat design</li>
                                    <li className="cursor-pointer hover:underline">Textured design</li>
                                </ul>
                            </div>

                            {/* 7. Designer Entry Gates */}
                            <div>
                                <h3 className="font-bold mb-3">Planters</h3>
                                <Image
                                    src="/desiginer-entry-gates1.jpg"
                                    alt="Designer Entry Gate"
                                    width={120}
                                    height={100}
                                    className="rounded-lg mb-3"
                                />
                                <ul className="space-y-1">
                                    <li className="cursor-pointer hover:underline">Gold coated</li>
                                    <li className="cursor-pointer hover:underline">Laser designed</li>
                                </ul>
                            </div>

                            {/* others */}
                            <div className="flex items-center justify-center mt-6 py-2 w-40 cursor-pointer">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-[#8f7c45] tracking-wider flex items-center gap-2">
                                    Others <FaArrowRight size={16} />
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

