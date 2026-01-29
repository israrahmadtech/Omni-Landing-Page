import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Main Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

                    {/* Left: Brand */}
                    <div className="text-white space-y-3">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
                                HECTOR OVIEDO
                            </h3>
                            <p className="text-sm sm:text-base">
                                Founder & CEO – <span className="text-white">OMNI CONNECTS</span>
                            </p>
                        </div>
                        <p className="text-sm sm:text-lg">
                            © 2026 Real. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Navigation */}
                    <div className="flex flex-col justify-end">
                        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm sm:text-base">
                            {[
                                "Home",
                                "The Journey",
                                "The Vision",
                                "The Platform",
                                "Impact",
                                "Join OMNI",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* Right: Social Icons */}
                        <div className="flex items-center gap-4 w-fit lg:ms-auto mt-3">
                            {[Linkedin, Instagram, Facebook].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-9 h-9 rounded-md bg-[#FFE5CE] flex items-center justify-center hover:bg-orange-500 transition-colors"
                                >
                                    <Icon className="w-4 h-4 text-black" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
