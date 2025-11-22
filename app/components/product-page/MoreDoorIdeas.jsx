"use client";

import Image from "next/image";

export default function MoreDoorIdeas(props) {
    const list = props.doorImages || [];

    function renderImages() {
        return list.map(function (img, index) {
            return (
                <div key={index} className="mb-1">
                    <Image
                        src={img}
                        alt={"idea-" + index}
                        width={150}
                        height={150}
                        className="rounded shadow"
                    />
                </div>
            );
        });
    }

    return (
        <div className="w-full mt-20">
            {/* Title Box */}
            <div className="w-38 text-center border-2 border-yellow-500 text-yellow-500 font-semibold p-3 mb-2">
                SEE MORE <br />
                DOOR IDEAS <br />
                BELOW ⬇
            </div>

            {/* Images */}
            {renderImages()}
        </div>
    );
}
