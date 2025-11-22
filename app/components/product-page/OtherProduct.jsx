// we will create a basic component that will show image and text -- then we can call it as much as time we need

// import Image from "next/image";

// function OtherProduct(){


//     return(
//         <div>
//             <div>image container</div>
//             <div>text container</div>
//         </div>
//     );
// }
import Image from "next/image";

function OtherProduct({ image, text }) {
    return (
        <div
            className="
                w-full
                flex items-center gap-4 p-4
                bg-[#0d0d0d] 
                rounded-2xl 
                border border-[#8f7c45]/30
                shadow-[0_0_15px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_25px_rgba(143,124,69,0.6)]
                hover:-translate-y-1 
                transition-all duration-300 
                cursor-pointer
                mt-5
            "
        >
            {/* IMAGE */}
            <div className="
                w-28 h-28 relative rounded-xl overflow-hidden 
                border border-[#8f7c45]/20
            ">
                <Image
                    src={image}
                    alt={text}
                    fill
                    className="
                        object-cover object-center 
                        transition-transform duration-300 
                        hover:scale-110
                    "
                />
            </div>

            {/* TEXT */}
            <div className="
                text-lg font-semibold 
                text-white 
                tracking-wide
                hover:text-[#8f7c45] 
                transition-colors duration-300
            ">
                {text}
            </div>
        </div>
    );
}

export default OtherProduct;
