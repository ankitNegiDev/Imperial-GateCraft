import BenefitsSection from "./components/home-page/BenefitsSection";
import BlogsSection from "./components/home-page/BlogsSection";
import FloatingButton from "./components/home-page/FloatingButtons";
import Footer from "./components/home-page/Footer";
import HeroSection from "./components/home-page/HeroSection";
import ProductListing from "./components/home-page/ProductListing";
import Testimonials from "./components/home-page/Testimonials";
import VideoSection from "./components/home-page/VideoSection";
// import Navbar from "./components/Navbar";

export default function Home() {

    // testimonial data
    let testimonialData = [
        {
            heading: "What Our Clients Say",
            testimonial:
                "Working with this team has been an absolute pleasure. They delivered exactly what we needed and exceeded expectations.",
            name: "John Doe",
            designation: "CEO",
            company: "Example Corp",
            type: "image",
            media: "/desiginer-entry-gates1.jpg",
        },
        {
            heading: "Amazing Experience",
            testimonial:
                "Their professionalism and creativity helped elevate our brand. Highly recommended!",
            name: "Sarah Lee",
            designation: "Marketing Head",
            company: "Brandify",
            type: "video",
            media: "/random-video.mp4",
        }
    ];


    // blogs and news section data

    var blogsData = [
        {
            title: "How Luxury Interiors Are Designed",
            category: "Interior",
            description: "Explore how modern luxury homes are designed with perfection and creativity.",
            image: "/royal-entry-doors.jpg"
        },
        {
            title: "Top 10 Home Styling Tips",
            category: "Lifestyle",
            description:
                "Simple and effective styling techniques used by top professionals to elevate spaces.",
            image: "/modern-steel-doors.png"
        },
        {
            title: "Best Materials for Modern Architecture",
            category: "Architecture",
            description:
                "A complete guide to choosing the best materials for durability and aesthetics.",
            image: "/stair-case-railings.png"
        }
    ];

    // news data
    let newsData = [
        {
            title: "Our New Store Launch",
            category: "Announcement",
            image: "/desiginer-entry-gates1.jpg",
            description: "We are excited to announce the opening of our new store..."
        },
    ];


    return (
        <>
            {/* <h1>Task 2</h1> */}
            <HeroSection />
            <ProductListing />
            <BenefitsSection />
            <VideoSection />
            <FloatingButton />
            <Testimonials data={testimonialData} />
            <BlogsSection blogs={blogsData} news={newsData} />
            {/* <Footer/> */}
        </>
    );
}
