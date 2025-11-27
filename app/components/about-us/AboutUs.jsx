"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutUs() {

    var timelineData = [
        { year: "2017", text: "Started in a small garage crafting security screen doors." },
        { year: "2019", text: "Expanded into designer wrought-iron gates & railings." },
        { year: "2022", text: "Built full-scale manufacturing unit & skilled artisan team." },
        { year: "2024", text: "Serving architects, luxury homeowners & premium builders PAN-India." }
    ];

    var capabilities = [
        "Custom Luxury Gates",
        "Designer Wrought-Iron Doors",
        "Balcony & Staircase Railings",
        "Laser-Cut Metal Panels & Facades",
        "Bulk Commercial / Apartment Projects",
        "On-site Measurement, Delivery & Installation",
    ];

    var processSteps = [
        { step: "01", title: "Concept & Consultation" },
        { step: "02", title: "Design & Engineering" },
        { step: "03", title: "Fabrication & Finishing" },
        { step: "04", title: "Delivery & Installation" },
    ];

    var qualityList = [
        "Premium grade metals & corrosion-resistant coatings",
        "Precision hand welding & advanced finishing standards",
        "Multi-stage inspection & structural safety validation",
        "Warranty coverage & premium installation support"
    ];

    var testimonials = [
        "Exceptional craftsmanship and premium finishing. The gate completely transformed our home exterior.",
        "The Dwars team's attention to detail is unmatched. Installation was smooth and professional.",
        "We recommend them to every architect we work with—true experts in artistic ironwork."
    ];

    return (
        <div className="bg-[#050505] text-white pt-0 mt-13 pb-28">

            {/* HERO SECTION */}
            <section className="relative w-full h-screen mb-24">
                <Image
                    src="/desiginer-entry-gates1.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        The Dwars
                        <span className="block mt-2 bg-[#fac21e] bg-clip-text text-transparent">
                            Crafting Metal. Creating Legacy.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">
                        Since 2017, The Dwars has transformed the world of premium architectural metalwork —
                        shaping bespoke wrought-iron gates, designer doors, railings & metal structures
                        built for luxury homes and signature architectural spaces across India.
                    </p>

                    <div className="w-48 h-0.5 bg-[#fac21e]  mx-auto mt-12"></div>
                </motion.div>
            </section>

            {/* TIMELINE */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-12">Our Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {timelineData.map(function (item, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-8 rounded-2xl text-center"
                            >
                                <h3 className="text-4xl font-bold text-[#fac21e] ">{item.year}</h3>
                                <p className="mt-3 text-gray-300 text-lg">{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* CAPABILITIES */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">Manufacturing Capabilities</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] p-8 border border-[#8f7c45]/30 rounded-2xl"
                            >
                                <h3 className="text-2xl text-[#fac21e]  font-medium">{text}</h3>
                                <p className="text-gray-300 text-base mt-3 leading-relaxed">
                                    Engineered with precision and handcrafted finishing for long-lasting performance.
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* PROCESS */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
                    Our Premium <span className="text-[#fac21e] ">Fabrication Process</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processSteps.map(function (step, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-2xl p-10 text-center"
                            >
                                <h3 className="text-4xl font-bold text-[#fac21e] ">{step.step}</h3>
                                <p className="text-lg mt-3 font-medium">{step.title}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* QUALITY */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24 bg-[#0c0c0c] border border-[#8f7c45]/30 rounded-3xl p-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#fac21e]  mb-12">
                    Quality. Precision. Reliability.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {qualityList.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#111] p-6 rounded-2xl border border-[#8f7c45]/20"
                            >
                                <p className="text-gray-300 text-base leading-relaxed">{text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* GALLERY */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#fac21e]">Our Work & Installations</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["/wrought-iron-doors.png", "/stair-case-railings.png", "/flat-entrance.png"].map(function (img, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-56 overflow-hidden rounded-2xl border border-[#8f7c45]/30"
                            >
                                <Image
                                    src={img}
                                    alt="gallery"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* TESTIMONIALS */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[#fac21e]">What Our Clients Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(function (text, index) {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#0c0c0c] border border-[#8f7c45]/30 p-8 rounded-2xl"
                            >
                                <p className="text-gray-300 text-sm leading-relaxed">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                <p className="mt-3 text-gray-300 text-base leading-relaxed">{text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* CTA */}
            <motion.section
                className="max-w-7xl mx-auto px-6 md:px-12 text-center mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-semibold mb-6">Let’s Build Something Legendary</h2>
                <p className="text-gray-300 mb-8 text-base">
                    Ready to begin designing your premium architectural metalwork project?
                </p>
                <button className="px-12 py-4 rounded-full bg-linear-to-r from-[#715723] to-[#8f7c45] text-black font-semibold uppercase tracking-wide hover:brightness-110 transition">
                    Start Your Project
                </button>
            </motion.section>

        </div>
    );
}

export default AboutUs;
