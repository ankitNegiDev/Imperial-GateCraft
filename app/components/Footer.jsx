"use client";

import React from "react";
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full pt-20 pb-10" style={{ backgroundColor: "#0a0a0a" }}>

            {/* TOP GOLDEN GRADIENT BAR */}
            <div
                className="w-full h-1 mb-12"
                style={{
                    background: "linear-gradient(to right, #715723, #8f7c45)",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-white">

                {/* LOGO + ABOUT */}
                <div>
                    <Image
                        src="/logo.png"
                        width={150}
                        height={80}
                        alt="Logo"
                        className="mb-5"
                    />

                    <p className="text-gray-400 leading-relaxed">
                        We deliver premium craftsmanship, innovative solutions, and luxury
                        digital experiences for global brands.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: "#8f7c45" }}>
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Projects</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: "#8f7c45" }}>
                        Services
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">UI/UX Design</li>
                        <li className="hover:text-white cursor-pointer">Web Development</li>
                        <li className="hover:text-white cursor-pointer">Brand Strategy</li>
                        <li className="hover:text-white cursor-pointer">Maintenance</li>
                        <li className="hover:text-white cursor-pointer">Digital Marketing</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: "#8f7c45" }}>
                        Contact
                    </h3>

                    <p className="flex items-center gap-2">
                        <FaPhone /> +91 98765 43210
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope /> info@company.com
                    </p>
                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt /> Mumbai, India
                    </p>

                    <div className="flex gap-4 mt-5">
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-[#8f7c45] text-[#8f7c45]
                                hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
                                hover:shadow-[0_0_12px_#8f7c45]"
                            >
                            <FaFacebookF size={18} />
                        </div>

                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-[#8f7c45] text-[#8f7c45]
                                hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
                                hover:shadow-[0_0_12px_#8f7c45]"
                            >
                            <FaInstagram size={18} />
                        </div>

                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-[#8f7c45] text-[#8f7c45]
                                hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
                                hover:shadow-[0_0_12px_#8f7c45]"
                                >
                            <FaLinkedinIn size={18} />
                        </div>
                    </div>


                </div>

            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="text-center text-gray-500 text-sm mt-16 pt-6 border-t border-[#8f7c45]/30">
                © {new Date().getFullYear()} All Rights Reserved | Designed with luxury by YourBrand.
            </div>
        </footer>
    );
}

export default Footer;
