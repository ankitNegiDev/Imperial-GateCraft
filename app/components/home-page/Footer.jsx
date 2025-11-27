"use client";

import React, { useRef } from "react";
// import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {

    let videoRef = useRef(null);

    // creating a function that will handle 5s delay
    function handleVideoDelay() {
        setTimeout(function callback() {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 5000);
    }
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
                <div className="flex flex-col items-start w-full">
                    <div className="w-full md:h-[280px] rounded-xl overflow-hidden">
                        <video
                            ref={videoRef}
                            src="/temp-video.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoDelay}
                            className="
                                block
                                w-full
                                h-[39.9vh]
                                object-cover
                                rounded-xl
                                overflow-hidden
                                scale-[1.9]     
                                origin-center 
                                transition-all
                                duration-500
                            "
                        />
                    </div>

                    <p className="text-gray-400 leading-relaxed mt-4 text-base">
                        We deliver premium craftsmanship, innovative solutions, and luxury
                        digital experiences for global brands.
                    </p>
                </div>



                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e] ">
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
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e] ">
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
                    <h3 className="text-xl font-semibold mb-4 text-[#fac21e]">
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
                                border border-[#fac21e]  text-[#fac21e] 
                                hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
                                hover:shadow-[0_0_12px_#8f7c45]"
                        >
                            <FaFacebookF size={18} />
                        </div>

                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-[#fac21e]  text-[#fac21e] 
                                hover:bg-[#8f7c45] hover:text-black cursor-pointer transition
                                hover:shadow-[0_0_12px_#8f7c45]"
                        >
                            <FaInstagram size={18} />
                        </div>

                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                border border-[#fac21e]  text-[#fac21e] 
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
