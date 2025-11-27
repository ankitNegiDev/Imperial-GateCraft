"use client";

import React from "react";
import Image from "next/image";

function ProductListing() {
    

    // product list array - it contains all the details about product
    let categories = [
        { name: "Main Gates", image: "/product-image.jpg" },
        { name: "Designer Entry Gates", image: "/product-image.jpg" },
        { name: "Modern Steel Doors", image: "/product-image.jpg" },
        { name: "Premium Balcony Railings", image: "/product-image.jpg" },
        { name: "Security Doors", image: "/product-image.jpg" },
        { name: "Laser Cut Panels", image: "/product-image.jpg" },
        { name: "Boundary Wall Designs", image: "/product-image.jpg" }
    ];

    // using this component we are rendering each product
    function renderItems() {
        return categories.map(function (item, index) {
            return (
                <div
                    key={index}
                    className="flex flex-col items-center gap-4"
                >

                    {/* IMAGE CARD */}
                    <div className="
                        w-48 h-48 md:w-56 md:h-56 
                        rounded-2xl overflow-hidden 
                        border border-[#8f7c45]/70 
                        shadow-[0_0_25px_rgba(143,124,69,0.15)]
                        hover:shadow-[0_0_35px_rgba(143,124,69,0.25)]
                        hover:scale-105
                        transition-all duration-300
                        bg-black
                        hover:cursor-pointer
                    ">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={300}
                            loading="lazy"
                            className="w-full h-full object-cover mix-blend-lighten"
                            fetchPriority="low"
                        />
                    </div>

                    {/* TITLE */}
                    <p className="text-base md:text-lg font-semibold tracking-wide text-[#fac21e] uppercase">
                        {item.name}
                    </p>
                </div>
            );
        });
    }

    return (
        //! imp - fix the color issue-- later
        // <section className="w-full py-20 px-6 bg-slate-500 text-white">
        // <section className="w-full py-20 px-6 bg-[#0d0d0d] text-white">
        // <section className="w-full py-20 px-6 bg-[#0f0e0a] text-white">
        <section className="w-full py-20 px-6 bg-[#0d0d0d] text-white">
            {/* TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#fac21e] tracking-wide">
                    Our Premium Categories
                </h2>
                <p className="text-gray-300 mt-2">
                    Explore Luxury Designs Tailored for Modern Homes
                </p>
            </div>

            {/* GRID */}
            <div className="
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-10 md:gap-14 justify-items-center
            ">

                {renderItems()}

                {/* VIEW ALL BOX */}
                <div className="
                    flex flex-col items-center justify-center 
                    w-48 h-48 md:w-56 md:h-56 
                    rounded-2xl border border-[#8f7c45]
                    bg-linear-to-br from-black/60 to-black/20
                    backdrop-blur-xl shadow-lg hover:cursor-pointer
                ">
                    <p className="text-3xl font-bold text-[#fac21e]">10+</p>
                    <p className="text-gray-300 text-sm">Categories</p>
                    <p className="text-gray-300 text-sm">Available</p>

                    <button className="
                        mt-3 px-4 py-1 border border-[#8f7c45] rounded-md 
                        text-[#fac21e] text-xs hover:bg-[#8f7c45] hover:text-black
                        transition-all duration-300 hover:cursor-pointer
                    ">
                        VIEW ALL
                    </button>
                </div>

            </div>

        </section>
    );
}

export default ProductListing;
