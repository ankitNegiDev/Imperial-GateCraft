"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function ProductsPage() {
    const params = useSearchParams();
    const category = params.get("category");

    const router = useRouter();

    function goBack() {
        router.back();
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-35">

            {/* Back Button */}
            <button
                onClick={goBack}
                className="mb-10 flex items-center gap-2 px-5 py-2 border border-[#8f7c45] text-[#d4b56f] rounded-xl
                           hover:bg-[#8f7c45]/20 hover:shadow-[0_0_15px_rgba(143,124,69,0.5)]
                           transition font-medium"
            >
                ← Back
            </button>

            {/* Page Heading */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#d4b56f]">
                    Products
                </h1>

                {/* Selected Category */}
                <p className="text-xl mt-4 text-[#bfa364]">
                    Showing category:
                    <span className="ml-2 font-semibold text-white">
                        {category ? category : "All Products"}
                    </span>
                </p>
            </div>

            {/* Coming Soon Section */}
            <div className="mt-20 flex flex-col items-center justify-center text-center">

                <div className="border border-[#8f7c45]/40 rounded-2xl px-10 py-16 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.4)] max-w-2xl">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#d4b56f] mb-4">
                        Coming Soon
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        The selected category’s products will be available soon.
                        We are currently crafting the perfect luxury experience for you.
                    </p>

                    <p className="text-sm mt-6 text-[#8f7c45] italic">
                        Stay tuned — new designs are arriving shortly.
                    </p>
                </div>

            </div>
        </div>
    );
}
