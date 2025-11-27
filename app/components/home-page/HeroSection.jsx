"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

function HeroSection() {
    var slides = [
        {
            title: "Premium Craftsmanship",
            description: "Discover premium craftsmanship with royal golden elegance.",
            image: "/desiginer-entry-gates1.jpg"
        },
        {
            title: "Experience Modern Luxury",
            description: "Handcrafted designs made with precision and heritage.",
            image: "/royal-entry-doors.jpg"
        },
        {
            title: "Elegance That Speaks",
            description: "Luxury collections created for your most special moments.",
            image: "/flat-entrance.png"
        }
    ];

    function renderSlides() {
        return slides.map(function (item, index) {
            return (
                <SwiperSlide key={index}>
                    <div className="  mt-20 flex flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 w-full max-w-8xl mx-auto">

                        {/* LEFT TEXT */}
                        <div className="w-full md:w-1/2 space-y-6 hero-text-animate">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#fac21e]  leading-tight">
                                {item.title}
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                {item.description}
                            </p>

                            {/* <button className="px-7 py-3 bg-[#8f7c45] text-black font-semibold rounded-md hover:bg-[#715723] transition-all duration-300 hover:cursor-pointer">
                                Explore Collection
                            </button> */}
                            <button className="px-7 py-3 text-black font-semibold rounded-md
                                bg-linear-to-r from-yellow-400 via-amber-500 to-amber-700
                                hover:from-yellow-300 hover:via-amber-400 hover:to-amber-600
                                shadow-lg shadow-yellow-300/40
                                hover:shadow-[0_0_25px_5px_rgba(255,223,0,0.6)]
                                transition-all duration-300 hover:cursor-pointer">
                                Explore Collection
                            </button>


                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full md:w-1/2 flex justify-center hero-image-animate">
                            <div className="
                                w-full max-w-xl h-[400px] md:h-[590px]
                                relative rounded-3xl overflow-hidden
                                bg-black
                                shadow-[0_0_25px_rgba(255,215,0,0.2)]
                                border border-[#8f7c45]/40
                                animate-fadeIn
                            ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>




                    </div>

                </SwiperSlide>
            );
        });
    }

    return (
        // <section className="w-full min-h-[90vh] bg-black text-white flex justify-center items-center">
        // <section className="w-full min-h-[90vh] bg-black text-white flex justify-center items-center relative z-0 overflow-visible "> 
        <section
            className="w-full min-h-[90vh] flex justify-center items-center relative z-0 overflow-visible bg-cover bg-center"
            // style={{ backgroundImage: "url('/hero-bg-1.jpg')" }}
            // style={{ backgroundImage: "url('/hero-2.jpg')" }}
            // style={{ backgroundImage: "url('/hero-3.jpg')" }}
            // style={{ backgroundImage: "url('/task-2-bg-1.jpg')" }}
            // style={{ backgroundImage: "url('/task-2-bg-2.jpg')" }}
            style={{ backgroundImage: "url('/task-2-bg-3.jpg')" }}
            // style={{ backgroundImage: "url('/task-2-bg-4.jpg')" }}
            // style={{ backgroundImage: "url('/task-2-bg-5.jpg')" }}
            // style={{ backgroundImage: "url('/task-2-bg-6.jpg')" }}
        >



            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 4500 }}
                speed={900}
                pagination={{ clickable: true }}
                className="w-full"
            >
                {renderSlides()}
            </Swiper>

        </section>
    );
}

export default HeroSection;
