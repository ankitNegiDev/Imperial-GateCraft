function ReviewCard(props) {
    const { day, month, author, rating, review } = props;

    // Generate stars
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "⭐";
    }

    return (
        <div
            className="
                flex flex-col md:flex-row 
                bg-neutral-900/60 backdrop-blur-xl 
                rounded-3xl 
                shadow-[0_10px_40px_rgba(0,0,0,0.55)]
                border border-[#8f7c45]/25
                p-6 gap-6 w-full max-w-2xl mb-8
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(0,0,0,0.75)]
            "
        >
            {/* LEFT SECTION */}
            <div className="flex flex-col items-center text-center md:min-w-[110px]">

                {/* Date Box */}
                <div
                    className="
                        bg-linear-to-br from-[#715723] to-[#8f7c45]
                        text-black 
                        rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                        w-24 h-24 flex flex-col items-center justify-center
                        border border-black/10
                    "
                >
                    <span className="text-4xl font-extrabold leading-none tracking-tight">
                        {day}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
                        {month}
                    </span>
                </div>

                {/* Author */}
                <p className="text-sm text-gray-300 font-semibold mt-3 tracking-wide">
                    {author}
                </p>

                {/* Stars */}
                <p
                    className="
                        mt-2 text-xl 
                        bg-[#fac21e]  
                        bg-clip-text text-transparent
                        font-semibold tracking-wide
                    "
                >
                    {stars}
                </p>
            </div>

            {/* REVIEW TEXT */}
            <div className="flex items-center">
                <p
                    className="
                        text-gray-200 
                        leading-relaxed 
                        text-sm md:text-base 
                        tracking-wide 
                        opacity-95
                    "
                >
                    {review}
                </p>
            </div>

        </div>
    );
}

export default ReviewCard;
