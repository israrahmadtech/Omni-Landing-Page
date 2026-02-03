import { Users, Book, Award, Mic } from 'lucide-react';
import aboutImg from '../../assets/images/about-img.jpeg'
import GlassCard from './GlassEffectCard';

export default function AboutSection() {
    return (
        <section id='about' className="min-h-screen text-white py-8 md:p-16 md:py-40 mt-30">
            <div className="my-container">
                {/* Main Content Grid */}
                <div className="grid grid-col-1 lg:grid-cols-[500px_1fr] 2xl:grid-cols-[600px_1fr] items-stretch gap-10 lg:gap-0 2xl:gap-20">
                    {/* Left Column - Image */}
                    <div className="relative w-full max-w-[400px] xl:w-[545px] h-[400px] lg:h-full xl:h-[516px] 2xl:w-full 2xl:max-w-full 2xl:h-auto">
                        <div className="w-full h-full">
                            <img
                                src={aboutImg}
                                alt="Professional portrait"
                                className="relative z-10 h-full w-full object-cover rounded-3xl border-1 border-white/10"
                            />
                            <div className="absolute z-0 top-[30%] left-[40%] w-1 h-1 rounded-full shadow-[0_0_25vw_48vw_rgba(239,93,26,0.3)] sm:shadow-[0_0_150px_280px_rgba(239,93,26,0.3)] xl:shadow-[0_0_15vw_18vw_rgba(239,93,26,0.3)] pointer-events-none"></div>
                        </div>

                        {/* 10+ Years Badge */}
                        <div className="absolute z-20 -bottom-[5%] right-[-5%] w-30 h-30 lg:w-40 2xl:w-50 lg:h-40 2xl:h-50">
                            <GlassCard className='p-3 2xl:p-6 w-full h-full flex flex-col justify-center items-center'>
                                <div className="text-orange-500 text-3xl lg:text-4xl 2xl:text-6xl font-bold mb-1">10+</div>
                                <div className="text-gray-300 text-xs lg:text-base 2xl:text-lg">Years Shaping</div>
                                <div className="text-gray-300 text-xs lg:text-base 2xl:text-lg">The Industry</div>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="relative z-10 space-y-2 sm:space-y-3 2xl:space-y-8">
                        <GlassCard className='px-4 sm:px-7 py-1 2xl:py-2 rounded-full w-fit mb-1'>
                            <button className="text-orange-500 rounded-full text-xs 2xl:text-sm font-semibold">
                                ABOUT HECTOR OVIEDO
                            </button>
                        </GlassCard>
                        {/* Empire Heading */}
                        <h1 className='text-2xl sm:3xl lg:text-4xl 2xl:text-7xl font-bold mb-2 lg:mb-4 2xl:mb-8 leading-tight'>
                            From the Barbershop to Building an <span className="text-orange-400">Empire</span>
                        </h1>

                        {/* Description Paragraphs */}
                        <p className="text-gray-400 text-sm lg:text-base 2xl:text-xl leading-relaxed 2xl:max-w-2xl">
                            Hector Oviedo's journey began behind the chair, where he discovered a deeper calling: empowering the next generation of beauty professionals to succeed not just creatively, but financially.
                        </p>

                        <p className="text-gray-400 text-sm lg:text-base 2xl:text-xl leading-relaxed 2xl:max-w-2xl">
                            As an educator, mentor, and entrepreneur, Hector witnessed firsthand the challenges students face after graduation—lack of clients, unstable income, and no clear path forward. This inspired him to create OMNI CONNECTS: a revolutionary platform designed to bridge the gap between education and real-world success.
                        </p>

                        {/* Role Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 2xl:pt-8">
                            {roles.map((role, index) => {
                                const Icon = role.icon;

                                return (
                                    <GlassCard key={index} className="p-3 sm:p-4 2xl:p-6">
                                        <div className="flex items-start gap-4">
                                            <GlassCard className="p-3 2xl:p-4 rounded-xl 2xl:rounded-2xl">
                                                <Icon className="w-4 2xl:w-6 h-4 2xl:h-6 text-orange-500" />
                                            </GlassCard>

                                            <div>
                                                <h3 className="text-white font-semibold text-base 2xl:text-lg mb-1">
                                                    {role.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs 2xl:text-sm">
                                                    {role.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </GlassCard>
                                );
                            })}
                        </div>
                        <div className="absolute z-0 bottom-[20%] right-[0%] w-1 h-1 rounded-full shadow-[0_0_15vw_28vw_#6347EB33] sm:shadow-[0_0_50px_180px_#6347EB33] xl:shadow-[0_0_5vw_10vw_#6347EB33] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const roles = [
    {
        title: "Founder & CEO",
        subtitle: "OMNI CONNECTS Platform",
        icon: Users,
    },
    {
        title: "Author",
        subtitle: "Cut With Purpose",
        icon: Book,
    },
    {
        title: "Industry Leader",
        subtitle: "10+ Years Experience",
        icon: Award,
    },
    {
        title: "Speaker & Mentor",
        subtitle: "Global Impact",
        icon: Mic,
    },
];