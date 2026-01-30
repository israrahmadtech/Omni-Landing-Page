import React from "react";
import Header from "./Header";
import Button from "./Button";
import { Dot } from "lucide-react";
import { Sparkles, Heart } from "lucide-react";
import GradientIconCard from "./GradientIconCard";
import MockupSection from "./MockupSection";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF5F1] to-[#E8F1FF]"
        >
            <div className="my-container">
                <Header />

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center px-6 mt-20 text-center">

                    {/* Badge */}
                    <Button variant="tertiary" icon={<Dot className="relative scale-140" size={25} />} iconPosition={"left"}
                        className="font-semibold bg-white text-orange-500 hover:bg-white py-2 md:pe-4 md:py-1 overflow-none"
                    >
                        NOW LIVE FOR PROFESSIONALS
                    </Button>

                    {/* Title */}
                    <h1 className="my-8 text-[54px] font-bold tracking-tight leading-none text-orange-500 sm:text-[78px] lg:text-[100px]">
                        OMNI <span className="block text-black">CONNECTS</span>
                    </h1>

                    {/* Description */}
                    <p className="mb-14 max-w-4xl text-base leading-relaxed text-black/60 sm:text-lg lg:text-xl">
                        The Digital Home for Beauty, Health & Wellness — where booking,
                        community, commerce, visibility, and growth come together, built
                        by the culture and designed for the future.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                        <Button variant="primary" className="bg-orange-500 hover:bg-orange-600">
                            Join OMNI Free
                        </Button>

                        <Button
                            variant="secondary"
                            className="bg-white text-orange-500 hover:bg-white"
                        >
                            Explore the Platform
                        </Button>
                    </div>

                    <div className="absolute -top-20 sm:top-0 left-0 lg:px-[20%] flex justify-between w-full">
                        <GradientIconCard icon={Heart} />
                        <GradientIconCard icon={Sparkles} />
                    </div>
                </div>

                {/* Mockups */}
                <MockupSection/>
            </div>

            {/* Optional subtle vignette */}
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div> */}
        </section>
    );
};

export default Hero;



//         Background Decorative Elements
// < div className = "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" >
//     <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//         </ >
// <div className="absolute z-20 top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none">
//     <div className="absolute -top-16 -right-28 w-[35vw] h-[35vw] bg-[#EF5E1A66] rounded-full blur-3xl pointer-events-none"></div>
// </div>