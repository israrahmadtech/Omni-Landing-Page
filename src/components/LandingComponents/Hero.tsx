import React from 'react';
import Button from './Button';
import Header from './Header';
import heroImg from "../../assets/images/hero-img.png"
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <div className="my-container overflow-visible">
            <div className="relative min-h-screen">
                <Header />

                {/* Hero Content */}
                <div className="relative z-10 py-8 pt-30 md:pt-20 pb-20 min-h-screen flex items-start md:items-center">
                    <div className="flex justify-center items-center w-full">
                        {/* Left Content */}
                        <div className="relative space-y-8">
                            {/* Large Text */}
                            <div className="relative space-y-4">
                                <h1 className="text-[21vw] font-bold leading-[80%] text-[#aaa]">
                                    <span className="block">HECTOR</span>
                                    <span className="block">OVIEDO</span>
                                </h1>
                                <div className="absolute -bottom-20 -left-24 w-[35vw] h-[35vw] bg-[#6347EB33] rounded-full blur-2xl pointer-events-none"></div>
                            </div>

                            {/* Bottom Tagline and CTA */}
                            <div className="relative z-40 flex flex-col lg:flex-row items-start lg:items-center justify-between mt-12 lg:mt-30">
                                {/* Heading */}
                                <div className="space-y-4 lg:w-1/2">
                                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-snug md:leading-tight">
                                        Turning Talent Into Visibility,
                                        <br className='hidden sm:inline' />
                                        Opportunity, And Lasting Success
                                        <br className='hidden sm:inline' />
                                        With OMNI CONNECTS.
                                    </h2>
                                </div>
                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-0 lg:w-auto">
                                    <Link to="/">
                                        <Button variant="primary" className="w-full sm:w-auto cursor-pointer">Join OMNI CONNECTS</Button>
                                    </Link>
                                    <Link to="/">
                                        <Button variant="secondary" className="w-full sm:w-auto cursor-pointer">Learn More</Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Center Content - Image with Glass Effect */}
                            <div className="absolute top-[10vw] w-full z-30 flex justify-center">
                                <div className="relative w-[35vw] h-[40vw] overflow-hidden">

                                    {/* GLASS CARD (overflow-hidden SAFE here) */}
                                    <div className="relative rounded-t-[114px] overflow-hidden border-t border-l border-r border-white/60">
                                        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-orange-500/10 via-white/10 to-transparent pointer-events-none"></div>

                                        <div className="relative">
                                            <div className="relative w-full h-full rounded-2xl">
                                                <img src={heroImg} alt="Hector Oviedo" className="w-full h-full object-cover object-top scale-120 relative top-9 sm:top-15 -left-[3vw]" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Black Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/80"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute z-20 top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none">
                <div className="absolute -top-16 -right-28 w-[35vw] h-[35vw] bg-[#EF5E1A66] rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
    );
};

export default Hero;