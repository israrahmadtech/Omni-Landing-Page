import React from "react";
import GlassCard from "./GlassEffectCard";
import Button from "./Button";
import { Link } from "react-router-dom";

const HectorsJourneySection: React.FC = () => {
    return (
        <section id="journey" className="bg-black px-6 sm:px-10 lg:px-20 py-24 text-white relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Badge */}
                <GlassCard className="px-5 py-2 rounded-full mb-6">
                    <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        Hector's Journey
                    </span>
                </GlassCard>

                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
                    Built From{" "}
                    <span className="text-orange-500">The Heart Behind It All</span>
                </h2>

                {/* Sub Text */}
                <p className="text-center text-gray-400 max-w-3xl mt-4 text-sm sm:text-base">
                    Every step of Hector's journey shaped the vision for OMNI CONNECTS.
                    This isn't theory—it's lived experience transformed into action.
                </p>

                {/* Quote Card */}
                <div className="w-full mt-14">
                    <GlassCard className="p-8 sm:p-12 relative overflow-hidden">

                        {/* Quote text */}
                        <p className="text-center text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed max-w-4xl mx-auto">
                            OMNI started in the classroom. It started with wanting students to
                            win—not just creatively, but financially. Not just today, but for
                            life
                        </p>

                        {/* Author */}
                        <p className="text-center mt-6 text-sm sm:text-base text-gray-400">
                            — Hector Oviedo,{" "}
                            <span className="text-orange-500">Founder of OMNI CONNECTS</span>
                        </p>

                        {/* Quote mark decoration */}
                        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 flex gap-2 opacity-30 select-none">
                            <span className="block w-[6px] h-8 bg-orange-500" />
                            <span className="block w-[6px] h-8 bg-orange-500" />
                        </div>
                    </GlassCard>
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <Link to="/">
                        <Button variant="primary" className="cursor-pointer">Join OMNI CONNECTS</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HectorsJourneySection;
