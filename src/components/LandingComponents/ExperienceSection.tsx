import React from "react";
import GlassCard from "../GlassEffectCard/GlassEffectCard";

const experiences = [
    { id: 1, text: "Teaching students" },
    { id: 2, text: "Running a barbershop" },
    { id: 3, text: "Mentoring the next generation" },
    { id: 4, text: "Learning business the hard way" },
    { id: 5, text: "Navigating the beauty industry's challenges" },
];

const ExperienceSection: React.FC = () => {
    return (
        <section className="my-container px-6 sm:px-10 lg:px-20 py-16 lg:py-28">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        Built From <span className="text-orange-500">Real Experience</span>, Not Theory
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-lg mt-4">
                        Every feature inside OMNI CONNECTS was born from Hector's real-world experience:
                    </p>
                </div>

                {/* Timeline / Steps */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-6">
                    {experiences.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center gap-4">

                            {/* Circle */}
                            <GlassCard className="w-20 h-20 rounded-full flex items-center justify-center">
                                <span className="text-orange-500 text-2xl font-bold">
                                    {item.id}
                                </span>
                            </GlassCard>

                            {/* Text */}
                            <p className="text-white text-sm sm:text-base font-medium leading-snug">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <div className="text-center max-w-3xl mt-10">
                    <p className="text-gray-400 text-sm sm:text-xl">
                        OMNI CONNECTS isn't designed from the outside looking in.
                    </p>
                    <p className="text-orange-500 font-semibold text-base sm:text-2xl mt-2">
                        It's designed from the inside out—by someone who lived it.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
