import React from "react";
import {
    Eye,
    TrendingUp,
    DollarSign,
    BarChart3,
    ShoppingBag,
    MapPin,
    ShieldCheck,
    BadgeCheck,
} from "lucide-react";
import GlassCard from "../GlassEffectCard/GlassEffectCard";
import Button from "./Button";
import { Link } from "react-router-dom";

interface Feature {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        title: "Real Visibility",
        desc: "Get discovered by clients who are actively searching for your services in your area.",
        icon: <Eye className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Client Growth",
        desc: "Build and retain a loyal clientele with tools designed to keep them coming back.",
        icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Income Stability",
        desc: "Predict and grow your earnings with consistent booking and pricing strategies.",
        icon: <DollarSign className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Performance Tracking",
        desc: "Monitor your growth with analytics that show what's working and where to improve.",
        icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Product & Service Sales",
        desc: "Sell your expertise and products directly through the platform, increasing revenue streams.",
        icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
    },
    {
        title: "Local Connection",
        desc: "Connect directly with clients in your community who need your specific skills.",
        icon: <MapPin className="w-5 h-5 text-orange-500" />,
    },
];

const WhyOmniExistsSection: React.FC = () => {
    return (
        <section id="impact" className="relative my-container px-6 sm:px-10 lg:px-20 py-16 text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Small Badge */}
                <GlassCard className="px-4 sm:px-7 py-1 sm:py-2 rounded-full mb-6">
                    <span className="text-orange-500 text-sm font-semibold uppercase">
                        The Omni Connects Solution
                    </span>
                </GlassCard>

                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                    Why <span className="text-orange-500">OMNI CONNECTS</span> Exists
                </h2>

                {/* Sub Text */}
                <p className="text-center text-gray-400 max-w-2xl mt-4 text-sm sm:text-base">
                    OMNI CONNECTS isn't just another app — it's an ecosystem designed by
                    someone who's lived the struggle and built the solution.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
                    {features.map((item, index) => (
                        <GlassCard key={index} className="p-6 flex flex-col gap-4">

                            {/* Icon */}
                            <GlassCard className="w-fit p-3">{item.icon}</GlassCard>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-2 mt-5">{item.title}</h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                        </GlassCard>
                    ))}
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                    <GlassCard className="p-3">
                        <div className="flex items-center gap-2">
                            <GlassCard className="p-2 w-fit rounded-lg">
                                <BadgeCheck className="w-4 h-4 text-orange-500" />
                            </GlassCard>
                            <span className="text-sm">Branding & Credibility Tools</span>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-3">
                        <div className="flex items-center gap-2">
                            <GlassCard className="p-2 w-fit rounded-lg">
                                <ShieldCheck className="w-4 h-4 text-orange-500" />
                            </GlassCard>
                            <span className="text-sm">Secure Payment Processing</span>
                        </div>
                    </GlassCard>

                </div>

                {/* CTA Button */}
                <Link to="/">
                    <Button variant="primary" className="w-full sm:w-auto mt-10 cursor-pointer">Explore OMNI CONNECTS</Button>
                </Link>

            </div>
            {/* Shadow */}
            <div className="absolute z-0 top-[20%] right-[0%] w-1 h-1 rounded-full shadow-[0_0_20vw_28vw_rgba(239,93,26,0.3)] sm:shadow-[0_0_180px_180px_rgba(239,93,26,0.3)] xl:shadow-[0_0_10vw_10vw_rgba(239,93,26,0.3)] pointer-events-none"></div>
            {/* Shadows */}
            <div className="absolute z-0 bottom-[20%] left-[0%] w-1 h-1 rounded-full shadow-[0_0_18vw_28vw_#47B4EB26] sm:shadow-[0_0_100px_180px_#47B4EB26] xl:shadow-[0_0_10vw_10vw_#47B4EB26] pointer-events-none"></div>
        </section>
    );
};

export default WhyOmniExistsSection;
