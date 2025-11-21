import BenefitsSection from "./components/BenefitsSection";
import FloatingButton from "./components/FloatingButtons";
import HeroSection from "./components/HeroSection";
import ProductListing from "./components/ProductListing";
import VideoSection from "./components/VideoSection";
// import Navbar from "./components/Navbar";

export default function Home() {
    return(
        <>
            <h1>Task 2</h1>
            <HeroSection/>
            <ProductListing/>
            <BenefitsSection/>
            <VideoSection/>
            <FloatingButton/>
        </>
    );
}
