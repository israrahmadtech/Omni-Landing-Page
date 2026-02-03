import React from "react";
import { Users, TrendingUp, Target, Lightbulb } from "lucide-react";
import GlassCard from "./GlassEffectCard";

const problems = [
    {
        icon: <Users className="w-5 h-5 text-orange-500" />,
        number: "01",
        text: "Students graduating with skills but zero clients",
    },
    {
        icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
        number: "02",
        text: "Professionals stuck between shop politics and unpredictable income",
    },
    {
        icon: <Target className="w-5 h-5 text-orange-500" />,
        number: "03",
        text: "Schools lacking the tools to truly prepare students for the real world",
    },
    {
        icon: <Lightbulb className="w-5 h-5 text-orange-500" />,
        number: "04",
        text: "An industry with passion but no centralized platform to support long-term success",
    },
];

const ProblemSection: React.FC = () => {
    return (
        <section className="relative my-container sm:px-10 lg:px-20 py-12 lg:py-30">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">

                {/* Small Button */}
                <GlassCard className="mx-auto px-4 sm:px-7 py-1 sm:py-2 rounded-full w-fit -mb-4">
                    <button className="text-orange-500 rounded-full text-sm font-semibold uppercase">
                        The Industry Challenge
                    </button>
                </GlassCard>

                {/* Heading */}
                <h1 className="text-center text-2xl sm:text-4xl 2xl:text-5xl font-bold leading-tight text-white">
                    The problem he saw & Refused <br /> <span className="text-orange-400">to Ignore</span>
                </h1>

                {/* Paragraph */}
                <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg">
                    While teaching across Broward and Miami-Dade, Hector witnessed the same obstacles over and over again:
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {problems.map((p) => (
                        <GlassCard
                            key={p.number}
                            className="p-6"
                        >
                            {/* Icon */}
                            <div className="flex justify-between items-center w-full">
                                <GlassCard className="p-4 w-fit">
                                    {p?.icon}
                                </GlassCard>
                                <h3 className="text-[#EEDBD059] font-semibold text-6xl mb-1">{p.number}</h3>
                            </div>

                            {/* Text */}
                            <div className="flex-1 mt-5">
                                <h3 className="text-white font-semibold text-lg mb-1">{p.text}</h3>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
            {/* Shadows */}
            <div className="absolute z-0 top-[20%] left-[0%] w-1 h-1 rounded-full shadow-[0_0_20vw_28vw_rgba(239,93,26,0.3)] sm:shadow-[0_0_180px_180px_rgba(239,93,26,0.3)] xl:shadow-[0_0_10vw_10vw_rgba(239,93,26,0.3)] pointer-events-none"></div>
            <div className="absolute z-0 bottom-[20%] right-[0%] w-1 h-1 rounded-full shadow-[0_0_18vw_28vw_#6347EB33] sm:shadow-[0_0_100px_180px_#6347EB33] xl:shadow-[0_0_10vw_10vw_#6347EB33] pointer-events-none"></div>
        </section>
    );
};

export default ProblemSection;
