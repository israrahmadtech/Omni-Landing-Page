import { Users, Book, Award, Mic } from 'lucide-react';
import aboutImg from '../../assets/images/about-img.png'
import GlassCard from '../GlassEffectCard/GlassEffectCard';

export default function AboutSection() {
    return (
        <section className="min-h-screen text-white p-8 md:p-16 md:py-40">
            <div className="my-container">
                {/* Main Content Grid */}
                <div className="grid xl:grid-cols-[500px_1fr] 2xl:grid-cols-[600px_1fr] items-start gap-50">
                    {/* Left Column - Image */}
                    <div className="relative w-fit">
                        <div className="w-fit xl:w-full h-full">
                            <img
                                src={aboutImg}
                                alt="Professional portrait"
                                className="relative z-10  object-contain rounded-3xl border-1 border-white/10"
                            />
                            <div className="absolute z-0 top-[30%] left-[40%] w-1 h-1 rounded-full shadow-[0_0_25vw_48vw_rgba(239,93,26,0.3)] sm:shadow-[0_0_150px_280px_rgba(239,93,26,0.3)] xl:shadow-[0_0_15vw_18vw_rgba(239,93,26,0.3)] pointer-events-none"></div>
                        </div>

                        {/* 10+ Years Badge */}
                        <div className="absolute z-20 -bottom-6 right-[-10%] w-30 h-30 lg:w-50 lg:h-50">
                            <GlassCard className='lg:p-6 w-full h-full flex flex-col justify-center items-center'>
                                <div className="text-orange-500 text-3xl lg:text-6xl font-bold mb-1">10+</div>
                                <div className="text-gray-300 text-xs lg:text-lg">Years Shaping</div>
                                <div className="text-gray-300 text-xs lg:text-lg">The Industry</div>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="relative z-10 flex-1 space-y-4 sm:space-y-6 md:space-y-8">
                        <GlassCard className='px-4 sm:px-7 py-1 sm:py-2 rounded-full w-fit mb-1'>
                            <button className="text-orange-500 rounded-full text-sm font-semibold">
                                ABOUT HECTOR OVIEDO
                            </button>
                        </GlassCard>
                        {/* Empire Heading */}
                        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight'>
                            From the Barbershop to Building an <span className="text-orange-400">Empire</span>
                        </h1>

                        {/* Description Paragraphs */}
                        <p className="text-gray-400 text-sm md:text-md sm:text-lg leading-relaxed">
                            Hector Oviedo's journey began behind the chair, where he discovered a deeper calling: empowering the next generation of beauty professionals to succeed not just creatively, but financially.
                        </p>

                        <p className="text-gray-400 text-sm md:text-md sm:text-lg leading-relaxed">
                            As an educator, mentor, and entrepreneur, Hector witnessed firsthand the challenges students face after graduation—lack of clients, unstable income, and no clear path forward. This inspired him to create OMNI CONNECTS: a revolutionary platform designed to bridge the gap between education and real-world success.
                        </p>

                        {/* Role Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                            {/* Founder & CEO Card */}
                            <GlassCard className='p-3 sm:p-4 md:p-6'>
                                <div className="flex items-start gap-4">
                                    <GlassCard className="p-4">
                                        <Users className="w-6 h-6 text-orange-500" />
                                    </GlassCard>
                                    <div>
                                        <h3 className="text-white font-semibold text-md sm:text-lg mb-1">Founder & CEO</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">OMNI CONNECTS Platform</p>
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard className='p-3 sm:p-4 md:p-6'>
                                <div className="flex items-start gap-4">
                                    <GlassCard className="p-4">
                                        <Book className="w-6 h-6 text-orange-500" />
                                    </GlassCard>
                                    <div>
                                        <h3 className="text-white font-semibold text-md sm:text-lg mb-1">Author</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">Cut With Purpose</p>
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard className='p-3 sm:p-4 md:p-6'>
                                <div className="flex items-start gap-4">
                                    <GlassCard className="p-4">
                                        <Award className="w-6 h-6 text-orange-500" />
                                    </GlassCard>
                                    <div>
                                        <h3 className="text-white font-semibold text-md sm:text-lg mb-1">Industry Leader</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">10+ Years Experience</p>
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard className='p-3 sm:p-4 md:p-6'>
                                <div className="flex items-start gap-4">
                                    <GlassCard className="p-4">
                                        <Mic className="w-6 h-6 text-orange-500" />
                                    </GlassCard>
                                    <div>
                                        <h3 className="text-white font-semibold text-md sm:text-lg mb-1">Speaker & Mentor</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">Global Impact</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                        <div className="absolute z-0 bottom-[20%] right-[0%] w-1 h-1 rounded-full shadow-[0_0_15vw_28vw_#6347EB33] sm:shadow-[0_0_50px_180px_#6347EB33] xl:shadow-[0_0_5vw_10vw_#6347EB33] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}