// whatspp icon and enquiry form 
/**
 * for enquiry form -- is simple modal -- and in modal what we can do is - we had a button when user click on it we need to record this so we will use onclick event and what kind of work we want for that we need a boolean kind of state variable so when user click on button the boolean state will be set as true which means it will open the div a kind of container and on this container we will give a cross button and when user click on this cross button we can set boolean state as false so modal will be closed 
 */

// "use client"
// const { useState } = require("react");

// function FloatingButton(){
//     // thsi is the state variable
//     const [isOpen , setIsOpen]=useState(false);

//     function toggleModal(){
//         console.log("modal is open/close")
//         setIsOpen(!isOpen);
//     }
//     return(
//         <>
//             <div className="flex justify-center"> 
//                 <button onClick={toggleModal} className="mt-10 border-2 border-red-300 px-2 py-4 ">
//                     enquiry
//                 </button>
//             </div>
//             {isOpen &&(
//                 <div className="border-2 border-red-300">hello the modal is open
//                     <br/>
//                     <button onClick={toggleModal}>cross</button>
//                 </div>
//             )}
//         </>
//     );
// }
// export default FloatingButton;


"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

function FloatingButtons() {
    const [open, setOpen] = useState(false);

    function toggleForm() {
        setOpen(!open);
    }

    return (
        <>
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="fixed right-1 top-[70%] -translate-y-1/2 bg-green-500 text-white 
                            p-4 rounded-full shadow-2xl hover:scale-110 transition-all
                            flex items-center justify-center z-50"
            >
                <FaWhatsapp size={26} />
            </a>

            {/* Enquiry Icon */}
            <button
                onClick={toggleForm}
                className="fixed right-1 top-[80%] bg-[#b17f1c] text-white 
                            p-4 rounded-full shadow-2xl hover:bg-gray-800 hover:scale-105 
                            transition-all flex items-center justify-center z-50 hover:cursor-pointer"
            >
                <FaRegEnvelope size={22} />
            </button>

            {/* Enquiry Form Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center animate-fadeIn z-9999">
                    <div className="bg-white w-[90%] max-w-lg p-8 rounded-2xl shadow-2xl relative border border-gray-300">

                        {/* Close Button */}
                        <button
                            onClick={toggleForm}
                            className="absolute top-4 right-5 text-gray-600 hover:text-black text-xl hover:cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Heading */}
                        <h2 className="text-3xl font-semibold mb-6 text-center tracking-wide text-gray-900">
                            Royal Luxury Enquiry
                        </h2>

                        {/* Form */}
                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg 
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            />

                            <textarea
                                placeholder="Your Message"
                                className="w-full border-[1.8px] border-gray-400 p-3.5 rounded-lg h-32
                                            placeholder-gray-600 text-gray-900 bg-white
                                            focus:outline-none focus:ring-2 focus:ring-black/50 transition shadow-sm"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3.5 rounded-lg 
                                            hover:bg-gray-900 transition font-medium tracking-wide shadow-sm hover:cursor-pointer"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default FloatingButtons;
