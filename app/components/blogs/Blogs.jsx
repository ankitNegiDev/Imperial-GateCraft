/**
 * for image slider what we can do is - first store all the images or text in array then create a function that will render these slide using map -- then in main blogs component just use swiper to show sliding effect-
 */


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// HERO SLIDES
const heroSlides = [
    { id: 1, img: "/product-image.jpg", title: "Crafting Metal. Crafting Stories." },
    { id: 2, img: "/desiginer-entry-gates1.jpg", title: "Where Art Meets Engineering in Metal" },
    { id: 3, img: "/hero-about-img.jpg", title: "Turning Steel Into Luxury Entrances" },
    { id: 4, img: "/hero-about-img1.jpg", title: "From Garage Beginnings to Master Craftsmen" },
];

// BLOG POSTS
const blogPosts = [
    { id: 1, img: "/product-image.jpg", date: "March 2025", tag: "Craftsmanship", title: "Why Quality Wrought-Iron Doors Matter for Home Security", desc: "How quality craftsmanship delivers strength, durability and premium style ensuring safety without compromising elegance.", link: "/blog/security-benefits" },
    { id: 2, img: "/desiginer-entry-gates1.jpg", date: "January 2025", tag: "Design", title: "Choosing the Perfect Metal Gate for Your Home", desc: "How material, shape & artistic elements elevate the home entrance experience.", link: "/blog/gate-design" },
    { id: 3, img: "/hero-about-img.jpg", date: "December 2024", tag: "Innovation", title: "Stainless vs Wrought Iron — Which Is Best?", desc: "Comparing strength, weather resistance, fabrication detail & luxury aesthetics.", link: "/blog/material-comparison" },
    { id: 4, img: "/hero-about-img1.jpg", date: "October 2024", tag: "Metal Decor", title: "Luxury Metal Décor For Interior & Landscape", desc: "Artistic installations built to transform modern and traditional spaces.", link: "/blog/metal-decor" },
    { id: 5, img: "/royal-entry-doors.jpg", date: "August 2024", tag: "Architecture", title: "How Custom Metalwork Enhances Premium Properties", desc: "Handcrafted designs and modern fabrication elevating architectural projects.", link: "/blog/custom-art" },
    { id: 6, img: "/modern-steel-doors.png", date: "July 2024", tag: "Manufacturing", title: "Inside The Dwars Production House", desc: "Behind the scenes into fabrication innovation, team skill & engineering precision.", link: "/blog/factory" },
];

export default function Blogs() {
    return (
        <div className="w-full min-h-screen bg-black text-white overflow-hidden pt-33">

            {/* HERO SLIDER */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1 }}
                className="relative w-full h-[600px] md:h-[750px]"
            >
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop
                    pagination={{ clickable: true }}
                    navigation
                    className="w-full h-full"
                >
                    {heroSlides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-full">
                                <Image src={slide.img} alt={slide.title} fill priority className="object-cover" />
                                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/70 to-transparent" />

                                <h2 className="absolute top-1/2 -translate-y-1/2 left-10 md:left-24 text-4xl md:text-6xl font-bold
                                    bg-clip-text bg-linear-to-r from-[#fac21e] via-[#e9c97c] to-[#b59332]
                                    leading-tight tracking-wide max-w-[680px] text-[#fac21e] ">
                                    {slide.title}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.section>

            {/* FEATURED SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-[#0b0b0b] py-24 px-6 md:px-14 border-t border-[#1f1f1f]"
            >
                <div className="max-w-7xl mx-auto space-y-14">

                    <div className="flex justify-between items-center pb-4 border-b border-[#2e2e2e]">
                        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-[#fac21e] ">
                            Featured Insights
                        </h2>
                        <button className="text-white hover:text-[#fac21e] text-lg font-semibold transition-all hover:cursor-pointer">View More →</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* FEATURED CARD */}
                        <div className="md:col-span-2 bg-[#101010] rounded-3xl p-5 border border-[#262626] flex flex-col">
                            <div className="relative w-full h-[550px] rounded-2xl overflow-hidden mb-6">
                                <Image src="/product-image.jpg" alt="Featured" fill className="object-fill object-center" />
                                <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent" />
                            </div>

                            <div className="flex gap-3 mb-6">
                                {["Craftsmanship", "Luxury", "Architecture"].map(tag => (
                                    <span key={tag} className="px-4 py-1.5 text-base  rounded-full border-2 border-[#fac31e4b] text-[#fac21e] bg-black/20 backdrop-blur hover:bg-linear-to-r from-[#715723] to-[#8f7c45] cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl font-bold mb-5 leading-snug">Creating Timeless Metal Masterpieces</h3>
                            <p className="text-gray-300 text-base leading-relaxed mb-7">
                                Elevate your architectural identity with ironwork designed to inspire where handcrafted artistry meets engineering precision.dentity with ironwork designed to inspire where handcrafted artistry meets engineering precision.
                            </p>

                            <button className="text-[#fac21e] text-lg font-semibold hover:text-white hover:underline hover:cursor-pointer duration-300 text-start">
                                Explore the Craftsmanship →
                            </button>
                        </div>

                        {/* SMALL EXTRA CARDS */}
                        <div className="flex flex-col gap-10">
                            {blogPosts.slice(0, 2).map(card => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    className="group bg-[#151515] p-6 rounded-2xl border border-[#2b2b2b] 
                                        hover:border-gray-600 transition-all duration-300 cursor-pointer"
                                >

                                    {/* Image */}
                                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-5">
                                        <Image
                                            src={card.img}
                                            alt={card.title}
                                            width={550}
                                            height={260}
                                            className="rounded-xl object-cover w-full h-full group-hover:scale-105 duration-700"
                                        />
                                    </div>

                                    {/* Tag */}
                                    <span
                                        className="px-3 py-1 text-base font-medium rounded-full w-fit 
                                            border border-[#fac21e] text-[#fac21e] 
                                            bg-linear-to-r from-[#3a3a3a] to-[#1a1a1a] tracking-wide"
                                    >
                                        {card.tag}
                                    </span>

                                    {/* Title */}
                                    <h4 className="font-semibold text-xl mt-4 mb-3 leading-snug 
                                        text-white group-hover:text-[#fac21e] duration-300 line-clamp-2">
                                        {card.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed tracking-wide line-clamp-4">
                                        {card.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </motion.section>


            {/* BLOG LIST CARDS */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {blogPosts.map(post => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="rounded-2xl overflow-hidden bg-[#111111] border border-[#2a2a2a]
                                flex flex-col justify-between group cursor-pointer
                                hover:scale-[1.02] duration-500"
                        >

                            {/* IMAGE */}
                            <div className="w-full h-64 overflow-hidden">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 duration-700"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-7 flex flex-col justify-between h-[260px]">

                                <div>
                                    {/* TAG + DATE */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 text-xs border border-[#fac21e] rounded-full text-[#fac21e] tracking-wide">
                                            {post.tag}
                                        </span>
                                        <p className="text-sm font-medium text-gray-500">{post.date}</p>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 
                                        tracking-wide group-hover:text-[#fac21e] duration-300">
                                        {post.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-gray-400 leading-relaxed line-clamp-3 text-sm">
                                        {post.desc}
                                    </p>
                                </div>

                                <Link href={post.link}
                                    className="font-medium text-[#fac21e] mt-4 inline-block 
                                        hover:underline underline-offset-4 decoration-[#fac21e] duration-300">
                                    Read More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="w-full bg-[#0b0b0b] border-t border-[#1f1f1f] py-24 px-6 md:px-16">
                <div className="max-w-6xl mx-auto text-center space-y-8">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                            bg-[#fac21e] tracking-wide">
                        Transform Your Space With Timeless Metal Art
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        From premium designer entrances to luxury architectural installations,
                        our craftsmanship brings character, strength and elegance to every project.
                        Let’s build something extraordinary together.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full text-lg font-semibold bg-[#fac21e] text-black
                            hover:bg-[#e0ae1b] transition duration-300 tracking-wide"
                        >
                            Book Free Consultation
                        </Link>

                        <Link
                            href="/products"
                            className="px-10 py-4 rounded-full text-lg font-semibold border border-[#fac21e] text-[#fac21e]
                                hover:bg-[#fac21e] hover:text-black transition duration-300 tracking-wide"
                        >
                            Explore Our Creations
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="mt-14 flex justify-center">
                        <div className="h-px w-40 bg-linear-to-r from-transparent via-[#fac21e] to-transparent"></div>
                    </div>

                    <p className="text-gray-500 text-sm tracking-wider">
                        Handcrafted by artisans. Built to last for generations.
                    </p>

                </div>
            </section>


        </div>
    );
}
