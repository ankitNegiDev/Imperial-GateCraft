"use client";

import React, { useState } from "react";
import Image from "next/image";

function BlogsSection(props) {
    const blogs = props.blogs;
    const news = props.news;

    const [activeTab, setActiveTab] = useState("blogs");

    // Function to switch tabs
    function selectTab(tabName) {
        setActiveTab(tabName);
    }

    // Function to render cards (blogs or news)
    function renderCards(items) {
        return items.map(function (item) {
            return (
                <div
                    key={item.title}
                    className="
                        bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#8f7c45]/30
                        transition-transform duration-500 hover:scale-103 
                        cursor-pointer
                    "
                >
                    <div className="relative w-full h-56">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-t-3xl"
                        />
                        <div className="absolute top-2 left-2 px-3 py-1 bg-[#fac21e] text-white font-semibold rounded-full text-sm shadow-lg">
                            {item.category}
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-bold mt-2 text-white bg-clip-text bg-[#fac21e]">
                            {item.title}
                        </h3>

                        <p className="text-gray-300 text-sm mt-3 line-clamp-3">
                            {item.description}
                        </p>

                        <button className="mt-5 font-semibold text-[#fac21e] hover:underline hover:cursor-pointer">
                            Read More →
                        </button>
                    </div>
                </div>
            );
        });
    }

    return (
        <section className="w-full py-20 bg-linear-to-b from-[#111] to-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text 
                    bg-[#fac21e]"
                >
                    Blogs & News
                </h2>

                <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto">
                    Stay updated with industry insights, premium updates & the latest trends.
                </p>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mt-10">
                    <button
                        onClick={function () { selectTab("blogs"); }}
                        className={
                            "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer " +
                            (activeTab === "blogs"
                                ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
                                : "bg-black text-[#fac21e] border-[#8f7c45]"
                            )
                        }
                    >
                        Blogs
                    </button>

                    <button
                        onClick={function () { selectTab("news"); }}
                        className={
                            "px-6 py-2 rounded-full font-semibold border transition-all duration-300 hover:cursor-pointer " +
                            (activeTab === "news"
                                ? "bg-linear-to-r from-[#715723] to-[#8f7c45] text-white border-transparent"
                                : "bg-black text-[#fac21e] border-[#8f7c45]"
                            )
                        }
                    >
                        News
                    </button>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                    {renderCards(activeTab === "blogs" ? blogs : news)}
                </div>

            </div>
        </section>
    );
}

export default BlogsSection;
