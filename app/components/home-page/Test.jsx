"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaHome, FaArrowRight } from "react-icons/fa";

// stpe 1 - import
import { useRouter } from "next/navigation";

export default function Test() {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [hideNav, setHideNav] = useState(false);

    const menuRef = useRef(null);
    const router = useRouter();

    // Toggle dropdown
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    // Close dropdown
    function closeMenu() {
        setIsOpen(false);
    }

    // Navigate to Product Page with category
    function goToCategory(category) {
        router.push(`/products?category=${category}`);
        setIsOpen(false); // close menu
    }

    // Close menu if clicked outside
    useEffect(function () {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Hide on scroll
    useEffect(() => {
        function handleScroll() {
            const current = window.pageYOffset;

            if (current > lastScroll && current > 70) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }

            setLastScroll(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <div>
            <nav
                className={
                    "fixed top-0 left-0 w-full z-50 px-0 py-2 text-white transition-transform duration-300 " +
                    (hideNav ? "-translate-y-full" : "translate-y-0") +
                    " bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-b-2 border-[rgba(143,124,69,0.5)]"
                }
            >
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4">

                    {/* LOGO */}
                    <Image src="/logo.png" width={120} height={50} alt="logo" />

                    {/* MENU */}
                    <div className="flex items-center gap-6 text-xl">

                        <div className="cursor-pointer hover:text-amber-300">
                            <FaHome size={26} />
                        </div>

                        <div className="cursor-pointer hover:text-amber-300">
                            About Us
                        </div>

                        {/* PRODUCTS DROPDOWN */}
                        <div
                            className="cursor-pointer flex items-center gap-2 hover:text-amber-300"
                            onClick={toggleMenu}
                        >
                            Products
                            <FaChevronDown
                                className={"transition " + (isOpen ? "rotate-180" : "")}
                                size={14}
                            />
                        </div>

                        <div className="cursor-pointer hover:text-amber-300">
                            Blogs
                        </div>

                        <div className="cursor-pointer hover:text-amber-300">
                            Contact
                        </div>

                    </div>
                </div>
            </nav>

            {/* ===== DROPDOWN MENU ===== */}
            {isOpen && (
                <div
                    className="absolute left-0 top-20 w-full 
                    bg-[rgba(10,10,10,0.6)] backdrop-blur-lg text-white 
                    border-t border-[#8f7c45]/40 shadow-xl z-40"
                >
                    <div ref={menuRef} className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-8">

                        {/* CATEGORY 1 */}
                        <div>
                            <h3 className="font-bold mb-3 text-[#8f7c45]">Boundary Wall Doors</h3>
                            <ul className="space-y-2 text-lg">
                                <li onClick={() => goToCategory("royal-entrance")} className="cursor-pointer hover:text-[#8f7c45]">
                                    Royal Entrance
                                </li>
                                <li onClick={() => goToCategory("modern-doors")} className="cursor-pointer hover:text-[#8f7c45]">
                                    Modern Doors
                                </li>
                                <li onClick={() => goToCategory("ornamental-iron")} className="cursor-pointer hover:text-[#8f7c45]">
                                    Ornamental Iron
                                </li>
                                <li onClick={() => goToCategory("laser-cut")} className="cursor-pointer hover:text-[#8f7c45]">
                                    Laser Cut
                                </li>
                            </ul>
                        </div>

                        {/* Add other categories the same way... */}
                    </div>
                </div>
            )}
        </div>
    );
}
