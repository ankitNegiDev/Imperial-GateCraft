"use client";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { FaDraftingCompass, FaShieldAlt, FaLock, FaBolt, FaCloudSun, FaPaintRoller, FaBug, FaBorderAll } from "react-icons/fa";


function Tab() {
    const [active, setActive] = useState("description");

    function renderContent() {
        switch (active) {
            case "description":
                return (
                    <div className="space-y-10 bg-neutral-900 text-white">

                        {/* Hero Section */}
                        <div className="bg-neutral-800 p-8 rounded-3xl shadow-xl border border-[#8f7c45]/30">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#fac21e]  mb-4">
                                Elevate Your Home’s Entrance
                            </h1>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                Discover our custom
                                <span className="font-semibold tetext-[#fac21e]"> Iron Security Screen Doors </span>
                                that perfectly combine
                                <span className="text-[#fac21e] font-semibold"> style</span>,
                                <span className="text-[#fac21e] font-semibold"> strength</span>, and
                                <span className="text-[#fac21e] font-semibold"> security</span>.
                            </p>
                        </div>

                        {/* Craftsmanship & Security */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="p-6 rounded-2xl shadow-md bg-neutral-800 border border-[#8f7c45]/40 transition-shadow hover:shadow-gold">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#fac21e]   mb-4">
                                    Expert Craftsmanship
                                </h2>
                                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                                    <li>100% American-made steel, handcrafted in Gilbert, Arizona</li>
                                    <li>14-gauge steel frame with durable iron pull handles</li>
                                    <li>10” steel latch & lock guard for maximum security</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl shadow-md bg-neutral-800 border border-[#8f7c45]/40 transition-shadow">
                                <h2 className="text-xl md:text-2xl font-semibold text-[#fac21e]   mb-4">
                                    Available Designs
                                </h2>

                                <div className="flex flex-wrap gap-3">
                                    {["Solid Steel", "Steel with Glass", "Wrought Iron & Wood"].map((item, i) => (
                                        <span key={i}
                                            className="bg-neutral-700 text-gray-200 px-4 py-1 rounded-full text-sm font-medium 
                                        hover:bg-[#8f7c45]/20 border border-[#8f7c45]/40 cursor-pointer transition">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Enhancements */}
                        <div className="p-6 rounded-2xl shadow-md bg-neutral-800 border border-[#8f7c45]/40">
                            <h2 className="text-xl md:text-2xl font-semibold text-[#fac21e]   mb-4">
                                Enhancements & Upgrades
                            </h2>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                                <li>Premium Kwikset or Schlage hardware</li>
                                <li>Integrated alarm & monitoring systems</li>
                                <li>Kick plates, removable sunscreens, powder-coated frames</li>
                                <li>Sidelights, transoms, and elegant iron pull handles</li>
                            </ul>
                        </div>

                        {/* Closing Statement */}
                        <div className="bg-neutral-800 p-8 rounded-3xl shadow-xl text-center border border-[#8f7c45]/40">
                            <p className="text-lg md:text-xl font-bold text-[#fac21e]  ">
                                With expert craftsmanship and personalized designs, we’ll help you create the
                                <span className="underline decoration-[#8f7c45]"> first impression you’ve always dreamed of</span>.
                            </p>
                        </div>

                    </div>
                );

            case "features":
                return (
                    <div className="space-y-10 px-4 md:px-0 bg-neutral-900 text-white">

                        {/* Section Header */}
                        <div className="relative text-center max-w-4xl mx-auto px-4 py-0 overflow-hidden">

                            {/* Gradient Heading */}
                            <h2 className="text-5xl md:text-6xl font-extrabold text-[#fac21e] relative inline-block">
                                <span className="bg-[#fac21e]   bg-clip-text text-transparent drop-shadow-lg">
                                    Key Features
                                </span>
                            </h2>

                            {/* Subheading */}
                            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
                                Each Iron Security Door is crafted with
                                <span className="font-semibold text-[#fac21e]" > precision</span>, offering
                                <span className="font-semibold text-[#fac21e]" > security</span>,
                                <span className="font-semibold text-[#fac21e]" > durability</span>, and
                                <span className="font-semibold text-[#fac21e]" > elegance</span>.
                            </p>

                            <div className="mt-8 w-32 h-1 mx-auto rounded-full bg-linear-to-r from-[#715723] to-[#8f7c45] shadow-lg"></div>
                        </div>


                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {[
                                { title: "Custom Designs", description: "Hundreds of handcrafted and plasma-cut designs, or customize your own", icon: FaDraftingCompass },
                                { title: "Heavy-Duty Steel", description: "14-gauge steel door and frame for maximum strength", icon: FaShieldAlt },
                                { title: "Advanced Locks", description: "Kwikset or Schlage locks with single or double cylinder deadbolt", icon: FaLock },
                                { title: "Ultimate Security", description: "10” thick steel latch guard protects lock and latches", icon: FaBolt },
                                { title: "Weather Protection", description: "Industry-leading Q-Lon weather seal", icon: FaCloudSun },
                                { title: "Durable Finish", description: "Powder coat finish over 3mm thick, twice-baked process", icon: FaPaintRoller },
                                { title: "Screen Options", description: "Removable insect screens and solar screens available", icon: FaBug },
                                { title: "Custom Frames", description: "Flush-mounted screen frames with fitted sill plate", icon: FaBorderAll },
                                { title: "Premium Hardware", description: "High-quality hinges, handles, and locks", icon: FaLock }
                            ].map(function (feature, index) {

                                const Icon = feature.icon;
                                const trimmedDesc =
                                    feature.description.length > 80
                                        ? feature.description.substring(0, 77) + "..."
                                        : feature.description;

                                return (
                                    <div
                                        key={index}
                                        className="
                                        relative p-6 rounded-3xl shadow-lg
                                        bg-linear-to-br from-[#222] via-[#1a1a1a] to-[#111]
                                        border border-[#8f7c45]/40
                                        transform-gpu transition-all duration-500
                                        hover:scale-105 hover:-translate-y-1 hover:rotate-1 hover:shadow-gold
                                        group flex flex-col h-64
                                    "
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
                                            absolute -top-5 -left-5 p-4 rounded-full
                                            bg-neutral-900 border border-[#8f7c45]/40
                                            shadow-xl text-[#fac21e]   text-2xl flex items-center justify-center
                                            transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
                                        "
                                        >
                                            <Icon />
                                        </div>

                                        {/* Text */}
                                        <h3 className="text-lg font-semibold text-[#fac21e] mt-8 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-base leading-relaxed grow overflow-hidden">
                                            {trimmedDesc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Closing */}
                        <div className="relative max-w-3xl mx-auto p-10 rounded-3xl bg-neutral-800 shadow-2xl border border-[#8f7c45]/40">
                            <p className="text-xl md:text-2xl font-extrabold text-center text-[#fac21e]">
                                Every feature is designed for
                                <span className="underline decoration-[#8f7c45]"> security, elegance & lasting value</span>.
                            </p>
                        </div>

                    </div>
                );





            case "options":
                const optionsList = [
                    "Iron pull handle with roller catches",
                    "Hinged glass in either clear or patterned designs",
                    "Tempered removable glass insert, either clear or patterned",
                    "Doggy doors with powder coated steel frame",
                    "Enhanced decorative 2-Step mounting frame",
                    "Sidelights or transoms",
                    "Decorative faux arch, arched door in square frame, or true arched door and frame",
                    "Kick plates with a variety of borders and designs",
                    "Removable steel perforated steel screen",
                    "Zinc primer protective coat for extended powder coat finish life",
                    "Hand applied custom faux finish",
                ];

                // Generate a random tilt for each card
                // function getRandomTilt() {
                //     const angle = Math.floor(Math.random() * 11) - 5; // -5 to +5
                //     return angle;
                // }

            
                return (
                    <div className="space-y-16 bg-neutral-900 text-white">

                        {/* Header */}
                        <div className="relative text-center max-w-4xl mx-auto px-4 py-0 overflow-hidden">
                            <h2 className="text-5xl md:text-6xl font-extrabold text-[#fac21e]">
                                Options & Customizations
                            </h2>

                            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
                                Tailor your door with premium
                                <span className="text-[#fac21e] font-semibold"> customization</span>
                                options for function and elegance.
                            </p>

                            <div className="mt-4 w-32 h-1 mx-auto rounded-full bg-linear-to-r from-[#715723] to-[#8f7c45]"></div>
                        </div>


                        {/* Options Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">

                            {optionsList.map(function (option, index) {

                                var gradients = [
                                    "from-[#715723] to-[#8f7c45]",
                                    "from-[#5f4d22] to-[#8f7c45]",
                                    "from-[#4c3f1d] to-[#8f7c45]"
                                ];

                                var gradient = gradients[index % gradients.length];

                                return (
                                    <div
                                        key={index}
                                        className={`
                                        relative p-6 rounded-3xl shadow-lg 
                                        bg-linear-to-br ${gradient}
                                        border border-[#8f7c45]/40 
                                        transform-gpu transition-all duration-500
                                        hover:scale-105 hover:-translate-y-2 hover:shadow-gold cursor-pointer group
                                    `}
                                    >

                                        {/* Text */}
                                        <p className="text-gray-200 text-lg leading-relaxed font-semibold group-hover:text-white">
                                            {option}
                                        </p>

                                        {/* Subtle Glow */}
                                        <div className="absolute inset-0 rounded-3xl bg-[#8f7c45]/10 opacity-0 group-hover:opacity-20 transition"></div>

                                    </div>
                                );
                            })}
                        </div>


                        {/* Closing */}
                        <div className="relative max-w-3xl mx-auto p-10 rounded-3xl bg-neutral-800 shadow-2xl border border-[#8f7c45]/40">
                            <p className="text-xl md:text-2xl font-extrabold text-center text-[#fac21e]">
                                Every option adds
                                <span className="underline decoration-[#fac21e] "> luxury, customization & quality</span>.
                            </p>
                        </div>

                    </div>
                );





            case "Reviews":
                return (
                    <div className="bg-neutral-900 text-white space-y-6 py-6 ">
                        <ReviewCard
                            day="27"
                            month="Jan"
                            author="Michele Namba"
                            rating={5}
                            review="Responsive and friendly staff. Very sturdy construction and quick installation service."
                            theme="luxury"
                        />
                        <ReviewCard
                            day="22"
                            month="Jan"
                            author="by Angela Stoll"
                            rating={4}
                            review="Excellent work and customer service"
                            theme="luxury"
                        />
                        <ReviewCard
                            day="18"
                            month="Jan"
                            author="by James Smith"
                            rating={4}
                            review="We are totally pleased with the entire experience..."
                            theme="luxury"
                        />
                    </div>
                );



            default:
                return null;
        }
    }

    function handleTabClick(tab) {
        setActive(tab);
    }
    function renderTabs() {
        const tabs = ["description", "features", "options", "Reviews"];

        return tabs.map(function (tab) {
            var isActive = active === tab;

            return (
                <span
                    key={tab}
                    onClick={function () {
                        handleTabClick(tab);
                    }}
                    className={
                        "cursor-pointer capitalize px-4 py-2 rounded-xl text-sm md:text-base transition-all duration-300 " +
                        (
                            isActive
                                ? "bg-linear-to-br from-[#715723] to-[#8f7c45] text-black font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                                : "text-gray-300 border border-transparent hover:border-[#8f7c45]/40 hover:text-[#8f7c45] hover:bg-neutral-800/50"
                        )
                    }
                >
                    {tab}
                </span>
            );
        });
    }


    return (
        <div
            className="
            p-6 
            bg-neutral-900/70 
            backdrop-blur-xl 
            rounded-2xl 
            shadow-[0_15px_60px_rgba(0,0,0,0.7)]
            border border-[#8f7c45]/25
            mr-2
            transition-all duration-300
            w-6xl
            ml-3
        "
        >
            {/* Tabs */}
            <div
                className="
                flex gap-4 flex-wrap mb-6 
                pb-4 border-b border-[#8f7c45]/20
            "
            >
                {renderTabs()}
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-200">
                {renderContent()}
            </div>
        </div>
    );

}

export default Tab;
