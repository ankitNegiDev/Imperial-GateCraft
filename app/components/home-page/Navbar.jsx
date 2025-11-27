"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


export default function Navbar() {

    const router = useRouter();

    // which dropdown is active
    const [activeMenu, setActiveMenu] = useState("");

    // Scroll hide/show behavior
    const [lastScroll, setLastScroll] = useState(0);
    const [hideNav, setHideNav] = useState(false);

    useEffect(function () {
        function handleScroll() {
            var currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 70) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }

            setLastScroll(currentScroll);
        }

        window.addEventListener("scroll", handleScroll);

        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    // Routing helper for product category to product page
    function goToCategory(category) {
        router.push("/products?category=" + category);
        setActiveMenu("");
    }

    // move from navbar to  contact us page
    function goToContactUsPage() {
        router.push("/contact-us");
        setActiveMenu("");
    }

    // redirect user from navbar to about us page.
    function goToAboutUsPage() {
        router.push("/about-us");
        setActiveMenu("");
    }

    return (

        // close mega on leaving
        <div onMouseLeave={function () { setActiveMenu(""); }}>

            {/* NAVBAR MAIN */}
            <nav
                className={
                    "fixed top-0 left-0 w-full z-50 text-white px-0 pt-1.5 pb-1 transition-transform duration-300 " +
                    (hideNav ? "-translate-y-full" : "translate-y-0") +
                    " bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-b-2 border-[rgba(143,124,69,0.5)]"
                }
            >
                <div className="flex items-center justify-between max-w-8xl">

                    {/* LOGO */}
                    <div className="text-xl font-bold cursor-pointer">
                        <Image
                            src="/Dwars-logo.png"
                            alt="Website Logo"
                            width={120}
                            height={50}
                            priority
                        />
                    </div>

                    {/* NAV LINKS */}
                    <div className="flex items-center gap-6 text-xl mr-10">

                        <div className="flex items-center gap-1 cursor-pointer hover:text-amber-300">
                            <FaHome size={26} />
                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("about"); }}
                            onClick={function () { goToAboutUsPage(); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            About Us
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("products"); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Products
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>

                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("signature"); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Signature Series

                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>

                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("blogs"); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Blogs

                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>

                        </div>

                        <div
                            onMouseEnter={function () { setActiveMenu("contact"); }}
                            onClick={function () { goToContactUsPage(); }}
                            className="relative group cursor-pointer hover:text-amber-300"
                        >
                            Contact Us
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#715723] to-[#8f7c45] transition-all duration-300 group-hover:w-full"></span>

                        </div>

                        <div
                            onClick={function () { console.log("go to cart"); }}
                            className="relative cursor-pointer hover:text-amber-300"
                        >
                            <FiShoppingCart size={26} />

                            <span className="absolute -top-1 -right-2 bg-[#fac21e]  text-black text-xs font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full">
                                3
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MEGA SECTION CONTAINER */}
            {activeMenu !== "" && (
                // we can change blurr container height -- if asked
                <div
                    className="
                        absolute left-0 top-[100px] w-full 
                        bg-[rgba(10,10,10,0.65)] 
                        backdrop-blur-md
                        text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                        border-t border-[#8f7c45]/40
                        z-40 animate-slideDown
                        
                        h-[85vh]
                    "
                >
                    <div className="max-w-7xl mx-auto p-8">

                        {/* ABOUT US SECTION */}
                        {activeMenu === "about" && (
                            <div className="text-center max-w-6xl mx-auto py-12 h-[85vh]">
                                <h2 className="text-3xl text-[#8f7c45] font-semibold">
                                    About The Dwars
                                </h2>
                                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                                    Since 2017, crafting luxury designer metal architecture — wrought iron doors,
                                    artistic railings & precision structural elements for premium spaces.
                                </p>

                            </div>
                        )}

                        {/* PRODUCTS SECTION */}
                        {activeMenu === "products" && (
                            // <div
                            //     className="
                            //         absolute left-0 top-[30px] w-full 
                            //         bg-[rgba(10,10,10,0.65)] 
                            //         backdrop-blur-md
                            //         text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                            //         border-t border-[#8f7c45]/40
                            //         z-40 animate-slideDown
                            //         "
                            //     >
                            <div className="max-w-6xl mx-auto p-8 relative">

                                {/* GRID */}
                                <div className="grid grid-cols-4 gap-x-10 gap-y-12">

                                    {/* 1. Boundary Wall Doors */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Boundary Wall Doors
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Royal Entrance"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Royal Entrance
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Modern doors"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Modern Doors
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Modern doors"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Ornamental Iron
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Modern doors"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Laser Cut
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 2. Brass Railings */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Brass Railings
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/wrought-iron-doors.png"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Single Door"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Single Door
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Double Door"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Double Door
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 3. Staircase Railings */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Staircase Railings
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/stair-case-railings.png"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Single Door"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Single Door
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Double Door"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Double Door
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 4. Flat Entrance Doors */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Flat Entrance Doors
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/flat-entrance.png"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Modern"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Modern
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Wrough iron"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Wrought Iron
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Ornamental"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Ornamental
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 5. Entry Doors */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Entry Doors
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/royal-entry-doors.jpg"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Modern"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Modern
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Wrought iron"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Wrought Iron
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Ornamental"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Ornamental
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 6. Balcony Railings */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Balcony Railings
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/Balcony-railings.png"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Flat design"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Flat Design
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Textured design"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Textured Design
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 7. Planters */}
                                    <div>
                                        <h3 className="font-bold mb-3 text-[#8f7c45] uppercase tracking-wide">
                                            Planters
                                        </h3>
                                        <div className="w-[140px] h-[140px] overflow-hidden rounded-lg mb-3 shadow-lg">
                                            <Image
                                                // src="/desiginer-entry-gates1.jpg"
                                                src="/product-image.jpg"
                                                alt=""
                                                width={130}
                                                height={110}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <ul className="space-y-1 text-base">
                                            <li
                                                onClick={function () { goToCategory("Gold coated"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Gold Coated
                                            </li>
                                            <li
                                                onClick={function () { goToCategory("Laser designed"); }}
                                                className="cursor-pointer hover:text-[#8f7c45]"
                                            >
                                                Laser Designed
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 8. Others */}
                                    <div className="flex items-center justify-start mt-10">
                                        <h3 className="text-lg md:text-xl font-bold uppercase text-[#8f7c45] tracking-wider flex items-center gap-2 cursor-pointer hover:text-white transition">
                                            Others <FaArrowRight size={18} />
                                        </h3>
                                    </div>

                                </div>
                            </div>
                            // </div>
                        )}

                        {/* SIGNATURE SECTION */}
                        {activeMenu === "signature" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#8f7c45] font-semibold">Signature Collection</h2>
                                <p className="text-gray-300 mt-4 text-sm">Exclusive handcrafted masterpieces for elite luxury projects.</p>
                            </div>
                        )}

                        {/* BLOG SECTION */}
                        {activeMenu === "blogs" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#8f7c45] font-semibold">Insights & Inspiration</h2>
                                <p className="text-gray-300 mt-4 text-sm">Design trends, fabrication science & architectural innovation.</p>
                            </div>
                        )}

                        {/* CONTACT SECTION */}
                        {activeMenu === "contact" && (
                            <div className="text-center max-w-3xl mx-auto py-12">
                                <h2 className="text-3xl text-[#8f7c45] font-semibold">Let’s Build Together</h2>
                                <p className="text-gray-300 mt-4 text-sm">Call / WhatsApp: +91 98765 43210 | support@thedwars.com</p>
                            </div>
                        )}

                    </div>
                </div>
            )}

        </div>
    );
}



