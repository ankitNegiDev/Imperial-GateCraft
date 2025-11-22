

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
                <div
                    className="
                        absolute left-0 top-[100px] w-full 
                        bg-[rgba(10,10,10,0.65)] 
                        backdrop-blur-md
                        text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                        border-t border-[#8f7c45]/40
                        z-40 animate-slideDown"
                    >
                    <div ref={menuRef} className="max-w-6xl mx-auto p-8 relative">

                        {/* Close button */}
                        <button
                            onClick={closeMenu}
                            className="absolute top-7 right-[-40] text-2xl hover:cursor-pointer hover:text-[#8f7c45] transition"
                        >
                            ✕
                        </button>

                        {/* GRID */}
                        <div className="grid grid-cols-4 gap-x-10 gap-y-12">

                            {/* 1. Boundary Wall Doors */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Boundary Wall Doors
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/boundry-wall-gates.jpg"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Royal entrance</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Modern doors</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Ornamental iron</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Laser cut</li>
                                </ul>
                            </div>

                            {/* 2. Brass Railings */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Brass Railings
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/wrought-iron-doors.png"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Single Door</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Double Door</li>
                                </ul>
                            </div>

                            {/* 3. Staircase Railings */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Staircase Railings
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/stair-case-railings.png"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Single Door</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Double Door</li>
                                </ul>
                            </div>

                            {/* 4. Flat Entrance Doors */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Flat Entrance Doors
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/flat-entrance.png"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Modern</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Wrought iron</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Ornamental</li>
                                </ul>
                            </div>

                            {/* 5. Entry Doors */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Entry Doors
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/royal-entry-doors.jpg"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Modern</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Wrought iron</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Ornamental</li>
                                </ul>
                            </div>

                            {/* 6. Balcony Railings */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Balcony Railings
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/Balcony-railings.png"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Flat design</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Textured design</li>
                                </ul>
                            </div>

                            {/* 7. Planters */}
                            <div>
                                <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                    Planters
                                </h3>
                                <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                    <Image
                                        src="/desiginer-entry-gates1.jpg"
                                        alt=""
                                        width={130}
                                        height={110}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <ul className="space-y-1 text-base">
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Gold coated</li>
                                    <li className="cursor-pointer hover:text-[#8f7c45]">Laser designed</li>
                                </ul>
                            </div>

                            {/* 8. Others (Aligned in Grid) */}
                            <div className="flex items-center justify-start mt-10">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-[#8f7c45] tracking-wider flex items-center gap-2 cursor-pointer hover:text-white transition">
                                    Others <FaArrowRight size={18} />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

