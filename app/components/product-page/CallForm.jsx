"use client";

import { useState } from "react";

export default function CallForm() {
    const [form, setForm] = useState({
        appointmentType: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zip: "",
        address: "",
        date: "",
        time: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", form);
    }

    return (
        <div
            className="
                w-[98%]
                bg-neutral-900/70 
                backdrop-blur-xl 
                rounded-2xl 
                shadow-[0_20px_70px_rgba(0,0,0,0.7)]
                p-3
                mt-14
                border border-[#8f7c45]/40
                transition-all duration-300
                hover:shadow-[0_25px_80px_rgba(0,0,0,0.85)]
                m-0
            "
        >
            <h2
                className="
                    text-center 
                    text-4xl 
                    font-extrabold 
                    text-white 
                    mb-12 
                    tracking-wider
                "
            >
                Schedule a{" "}
                <span className="text-[#fac21e]  drop-shadow-[0_2px_8px_rgba(143,124,69,0.6)]">
                    Free
                </span>{" "}
                Consultation
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-9"
            >
                {/* Appointment Type */}
                <div className="lg:col-span-2">
                    <select
                        name="appointmentType"
                        className="
                            w-full bg-neutral-800/80 text-gray-400
                            border border-[#8f7c45]/30 rounded-xl
                            px-4 py-2.5
                            focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                            placeholder-gray-400 transition
                            
                        "
                        onChange={handleChange}
                    >
                        <option value="">Select Consultation Type</option>
                        <option value="home">Home Consultation</option>
                        <option value="virtual">Virtual Consultation</option>
                    </select>
                </div>

                {/* First Name */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* Last Name */}
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* Phone */}
                <input
                    type="text"
                    name="phone"
                    placeholder="Mobile Phone"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* ZIP */}
                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* Address */}
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="
                        bg-neutral-800/80 text-gray-200
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        placeholder-gray-400 transition
                    "
                    onChange={handleChange}
                />

                {/* Date */}
                <input
                    type="date"
                    name="date"
                    className="
                        bg-neutral-800/80 text-gray-400
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        transition
                    "
                    onChange={handleChange}
                />

                {/* Time */}
                <select
                    name="time"
                    className="
                        bg-neutral-800/80 text-gray-400
                        border border-[#8f7c45]/30 rounded-xl
                        px-4 py-2
                        focus:border-[#8f7c45] focus:ring-2 focus:ring-[#8f7c45]/40
                        transition
                    "
                    onChange={handleChange}
                >
                    <option value="">Preferred Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                {/* Submit Button */}
                <div className="lg:col-span-2">
                    <button
                        type="submit"
                        className="
                            w-full bg-linear-to-r from-[#715723] to-[#8f7c45]
                            text-black font-extrabold text-xl
                            py-4 rounded-xl tracking-wide
                            shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                            hover:shadow-[0_0_40px_rgba(143,124,69,0.9)]
                            hover:brightness-110
                            transition-all duration-300
                            hover:cursor-pointer
                        "
                    >
                        Schedule Now →
                    </button>
                </div>
            </form>
        </div>
    );
}
