import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
    const locations = [
        { city: "LITCHFIELD PARK", type: "SHOWROOM", address: "5115 N. Dysart Road, #B-206", zip: "Litchfield Park, AZ 85340", phone: "623-433-9976" },
        { city: "GILBERT", type: "SHOWROOM", address: "1415 N. Mondel Drive", zip: "Gilbert, AZ 85233", phone: "480-588-4811" },
        { city: "SCOTTSDALE", type: "SHOWROOM", address: "6990 E. Shea Blvd., Suite 111", zip: "Scottsdale, AZ 85254", phone: "480-339-6131" },
        { city: "TUCSON", type: "RESOURCE CENTER", address: "One South Church Avenue, Suite 1200", zip: "Tucson, AZ 85701", phone: "520-834-8058" },
        { city: "MESA MARKET PLACE", type: "WEEKEND MARKET", address: "10550 E. Baseline Rd. #B-59", zip: "Mesa, AZ 85209", phone: "480-339-6151" },
        { city: "AUSTIN, TEXAS", type: "SHOWROOM", address: "8651 Old Bee Caves Rd. Suite B", zip: "Austin TX 78735", phone: "512-662-1919" },
    ];

    function renderLocations() {
        const items = [];
        for (let i = 0; i < locations.length; i++) {
            const loc = locations[i];
            items.push(
                <div key={i} className="p-4 hover:shadow-lg rounded-lg transition-shadow cursor-pointer flex flex-col justify-between h-full bg-gray-50 border border-gray-200">
                    <div>
                        {/* City name stays in one line */}
                        <h3 className="font-bold text-lg truncate">{loc.city}</h3>
                        <p className="text-sm text-gray-600 mb-3">{loc.type}</p>

                        <p className="flex items-start gap-2 text-gray-700 text-sm leading-snug mb-2">
                            <FaMapMarkerAlt className="text-yellow-500 mt-1 shrink-0" />
                            <span>
                                {loc.address}<br />
                                {loc.zip}
                            </span>
                        </p>

                        <p className="flex items-center gap-2 text-yellow-500 font-medium">
                            <FaPhoneAlt /> {loc.phone}
                        </p>
                    </div>
                </div>
            );
        }
        return items;
    }

    function renderNavLinks() {
        const links = ["Security Doors", "Entry Doors", "Gates", "Photos", "Videos", "Locations", "Customer Care", "About Us", "Contact Us"];
        const items = [];
        for (let i = 0; i < links.length; i++) {
            items.push(
                <a key={i} href="#" className="hover:text-yellow-500 transition-colors">{links[i]}</a>
            );
        }
        return items;
    }

    return (
        <footer className="bg-black text-white pt-12 pb-8">

            {/* WHITE BOX FOR LOCATIONS */}
            <div className="bg-white text-black rounded-xl shadow-lg max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {renderLocations()}
                </div>
            </div>

            {/* CONTACT BOX */}
            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="bg-gray-900 p-6 rounded-xl w-full md:w-1/3 ml-auto shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <FaMapMarkerAlt className="text-yellow-500" /> 1415 North Mondel Drive, Gilbert, AZ 85233
                    </p>
                    <p className="flex items-center gap-2 text-yellow-500 font-medium mb-1">
                        <FaPhoneAlt /> (480) 588-4811
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaEnvelope className="text-yellow-500" /> Info@FirstImpressionIronworks.com
                    </p>
                </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-10 mt-10 text-yellow-500 text-3xl">
                <FaFacebookF className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                <FaPinterestP className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                <FaMapMarkerAlt className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                <FaInstagram className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                <FaTiktok className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
            </div>

            {/* NAV LINKS */}
            <div className="flex justify-center flex-wrap gap-6 mt-8 text-gray-400 text-sm">
                {renderNavLinks()}
            </div>

        </footer>
    );
}
