import React from "react";
import { Check, Heart } from "lucide-react";
import GlassCard from "./GlassEffectCard";

const schoolPoints = [
    "Real-world business systems",
    "Confidence to build clientele",
    "Guidance on professionalism",
    "Tools to thrive after graduation",
    "The motivation to push past obstacles",
];

const studentPoints = [
    "Opportunity",
    "Stability",
    "Visibility",
    "Community",
    "A platform that helps them grow, not just survive",
];

const FounderMissionSection: React.FC = () => {
    return (
        <section id="vision" className="bg-[#140B09] sm:px-10 lg:px-20 py-20 text-white">
            <div className="my-container max-w-7xl mx-auto flex flex-col items-center">

                {/* Badge */}
                <GlassCard className="px-2 sm:px-5 py-2 rounded-full mb-3 sm:mb-6">
                    <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        Hector's Mission Is Simple But Powerful
                    </span>
                </GlassCard>

                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
                    A <span className="text-orange-500">Founder</span> Who Leads With{" "} Heart,{" "}
                    <span className="text-orange-500">Purpose</span>, And{" "} Vision
                </h2>

                {/* Sub text */}
                <p className="text-center text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
                    To ensure beauty professionals never go unseen, unsupported, or underpaid again.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">

                    {/* Left Card */}
                    <GlassCard className="p-6 sm:p-8">
                        <h3 className="text-xl font-semibold mb-5">His Work With Schools</h3>

                        <ul className="flex flex-col gap-4">
                            {schoolPoints.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm sm:text-lg text-gray-300">
                                    <span className="mt-1 text-orange-500">
                                        <Check size={20} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    {/* Right Card */}
                    <GlassCard className="p-6 sm:p-8">
                        <h3 className="text-xl font-semibold mb-5">Every Student Deserves</h3>

                        <ul className="flex flex-col gap-4">
                            {studentPoints.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm sm:text-lg text-gray-300">
                                    <span className="mt-1 text-orange-500">
                                        <Heart size={20} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                </div>

                {/* Bottom Paragraph */}
                <p className="text-center text-gray-400 max-w-3xl mt-10 text-sm sm:text-base leading-relaxed">
                    His presentations combine his book, his personal journey, his systems, and the OMNI
                    technology—giving students not just inspiration, but a roadmap for their future.
                </p>

            </div>
        </section>
    );
};

export default FounderMissionSection;
