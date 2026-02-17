import React from "react";
import Header from "./Header";
import Button from "./Button";
import { Dot } from "lucide-react";
import { Sparkles, Heart } from "lucide-react";
import GradientIconCard from "./GradientIconCard";
import MockupSection from "./MockupSection";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF5F1] to-[#E8F1FF]"
        >
            <div className="my-container">
                <Header />

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center px-6 mt-5 2xl:mt-20 text-center">

                    {/* Badge */}

                    <Button variant="tertiary" icon={<Dot className="relative scale-140" size={25} />} iconPosition={"left"}
                        className="font-semibold bg-white text-orange-500 hover:bg-white md:pe-4 py-0.5 2xl:py-2 overflow-none"
                    >
                        NOW LIVE FOR PROFESSIONALS
                    </Button>

                    {/* Title */}
                    <h1 className="mt-6 text-[44px] font-bold tracking-tight leading-none text-orange-500 2xl:text-[68px]">
                        OMNI <span className="text-black">CONNECTS</span>
                    </h1>

                    {/* Description */}
                    <p className="mb-5 max-w-4xl text-base leading-relaxed text-black/60 text-sm sm:text-base 2xl:text-lg">
                        The Digital Home for Beauty, Health & Wellness — where booking,
                        community, commerce, visibility, and growth come together, built
                        by the culture and designed for the future.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                        <Link to="/">
                            <Button variant="primary" className="text-white bg-[#EF5E1A] hover:bg-orange-600 cursor-pointer text-xs md:text-sm 2xl:text-xl">
                                Join OMNI Free
                            </Button>
                        </Link>

                        <Link to="/">
                            <Button variant="secondary" className="cursor-pointer bg-white text-orange-500 hover:bg-white text-xs xl:text-sm 2xl:text-xl"
                            >
                                Explore the Platform
                            </Button>
                        </Link>
                    </div>

                    <div className="absolute -top-20 sm:top-0 left-0 lg:px-[20%] hidden sm:flex justify-between w-full">
                        <GradientIconCard icon={Heart} />
                        <GradientIconCard icon={Sparkles} />
                    </div>
                </div>

                {/* Mockups */}
                <MockupSection />
            </div>

            {/* Optional subtle vignette */}
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div> */}
        </section>
    );
};

export default Hero;