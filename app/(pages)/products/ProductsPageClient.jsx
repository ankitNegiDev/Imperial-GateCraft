"use client"
// import CallForm from "./components/CallForm";
import CallForm from "../../components/product-page/CallForm"
// import ImageSwiper from "./components/ImageSwiper";
import ImageSwiper from "../../components/product-page/ImageSwiper"
// import MoreDoorIdeas from "./components/MoreDoorIdeas";
import MoreDoorIdeas from "../../components/product-page/MoreDoorIdeas"
// import OtherProduct from "./components/OtherProduct";
import OtherProduct from "../../components/product-page/OtherProduct"
// import Sidebar from "./components/Sidebar";
import Sidebar from "../../components/product-page/Sidebar"
// import Tab from './components/Tab';
import Tab from "../../components/product-page/Tab"
// import YouTubeEmbed from './components/YouTubeEmbed';
import YouTubeEmbed from "../../components/product-page/YouTubeEmbed"
// import Footer from "./components/Footer";
// import Footer from "../components/product-page/Footer"
import Footer from "../../components/home-page/Footer"

import { useSearchParams } from "next/navigation";


function ProductsPageClient() {

    const params = useSearchParams();
    const category = params.get("category");


    const images = [
        "/product-page/internship task 1 image.jpg",
        "/product-page/internship task 2 iamge.jpg",
        "/product-page/internship task 3 image.jpg",
        "/product-page/internship task 4 image.jpg"
    ];
    const doorImages = [
        "/product-page/internship task 1 image.jpg",
        "/product-page/internship task 2 iamge.jpg",
        "/product-page/internship task 3 image.jpg",
    ];
    return (
        <>
            <div className="flex pt-34 pb-15 w-8xl bg-black">
                {/* left */}
                <div className="w-[43%] flex flex-col gap-0 mr-0 ml-3 mt-5">
                    <Sidebar />
                    <OtherProduct
                        image={"/product-page/Bamboo.jpg"}
                        text={"Bamboo Iron Security Door"}
                    />
                    <OtherProduct
                        image={"/product-page/iron.jpg"}
                        text={"Custom French Exclusive Iron Entry Door"}
                    />
                    <OtherProduct
                        image={"/product-page/iron2.jpg"}
                        text={"Desert Sunray Iron Entry Door"}
                    />
                    <OtherProduct
                        image={"/product-page/iron3.jpg"}
                        text={"Desert Sunray Iron Security Door"}
                    />
                </div>

                <div className="w-full flex flex-col m-0">
                    {/* Horizontal row: Swiper + More Ideas */}
                    <div className="flex w-full gap-0 mb-6">
                        {/* LEFT: Image Swiper */}
                        <div className="w-3/4">
                            <h1 className="ml-4 text-4xl font-bold text-[#fac21e]  mb-0 mt-1 tracking-wide drop-shadow-[0_0_6px_rgba(143,124,69,0.5)] text-center">
                                {category}
                            </h1>


                            <ImageSwiper images={images} />
                        </div>

                        {/* RIGHT: More Door Ideas */}
                        <div className="w-1/4">
                            <MoreDoorIdeas doorImages={doorImages} />
                        </div>
                        {/* right  */}
                        <div>
                            <CallForm />
                        </div>
                    </div>

                    {/* Tab Section below */}
                    <div className="w-full">
                        <Tab />
                    </div>

                    {/* yt embedded video */}
                    <div>
                        <YouTubeEmbed />
                    </div>
                </div>
            </div>
            <div>
                {/* <Footer /> */}

                {/* <Footer/> */}
            </div>
        </>
    );
}

export default ProductsPageClient;