"use client";

import React from "react";

function Sidebar() {
    const list = [
        "All Products",
        "Courtyard Gates",
        "HomeGuard Security Screen",
        "Iron Artwork",
        "Iron Doors – Iron Entry Doors – Entry Doors – Wrought Iron Entry Doors",
        "Iron Enclosures",
        "Iron Gates – Wrought Iron Gates – Driveway Gates – Garden Gates – Wood Gates",
        "Iron Railings",
        "Iron Security Doors",
        "Iron Spiral Staircases",
        "Iron Trellises",
        "Iron Window Guards",
        "Other Products",
        "Sunscreens",
    ];

    return (
        <div
            className="
                w-full 
                bg-[#0a0a0a] 
                rounded-2xl 
                shadow-[0_0_25px_rgba(0,0,0,0.5)] 
                p-4 
                border border-[#8f7c45]/40

            "
        >
            <ul>
                {list.map(function (item, index) {
                    return (
                        <li key={index} className="py-3">
                            <button
                                className="
                                    w-full
                                    text-left
                                    text-white
                                    font-semibold
                                    text-lg
                                    tracking-wide
                                    hover:text-[#8f7c45]
                                    transition-colors
                                    duration-200
                                "
                            >
                                {item}
                            </button>

                            {/* Gradient Divider */}
                            <div
                                className="
                                    mt-3 
                                    h-px 
                                    w-full 
                                    bg-linear-to-r 
                                    from-[#715723] 
                                    to-[#8f7c45]
                                    opacity-60
                                "
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
