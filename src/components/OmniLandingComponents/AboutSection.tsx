import Button from "./Button";
import GradientCard from "./GradientCard";
import aboutImg from "../../assets/images/omni-about.png"; // 👈 apni image ka path

const stats = [
    {
        title: "10+",
        description: "All-in-One Platform",
    },
    {
        title: "50k+",
        description: "Community & Growth",
    },
    {
        title: "100%",
        description: "Industry Expertise",
    },
];

function AboutSection() {
    return (
        <section id="about" className="py-20 bg-[#F8F6F4]">
            <div className="my-container">
                <div className="grid lg:grid-cols-2 lg:items-center">

                    {/* LEFT — IMAGE */}
                    <div className="relative pb-10 sm:pb-20 lg:pb-0 pe-0 lg:pe-20">
                        <div className="h-full sm:h-[600px] lg:h-full xl:max-h-[610px] 2xl:max-h-[800px] rounded-[50px] sm:rounded-[90px] overflow-hidden border-20 border-white">
                            <img src={aboutImg} alt="About OMNI" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* RIGHT — CONTENT */}
                    <div className="text-black">

                        {/* Badge */}
                        <Button
                            variant="tertiary"
                            className="font-semibold bg-white text-orange-500 hover:bg-white px-4 py-1.5"
                        >
                            ABOUT OMNI
                        </Button>

                        {/* Title */}
                        <h2 className="text-[7vw] lg:text-[4vw] font-bold tracking-tight leading-tight text-orange-500">
                            OMNI <span className="text-black">CONNECTS</span>
                        </h2>

                        {/* Subtitle */}
                        <h3 className="2xl:mt-2 text-xl sm:text-2xl font-semibold text-black">
                            Empowering the Beauty, Health & Wellness World
                        </h3>

                        {/* Paragraphs */}
                        <div className="mt-3 2xl:mt-6 space-y-5 text-black/60 text-sm sm:text-base 2xl:text-xl leading-relaxed w-full max-w-xl">
                            <p>
                                In every generation, there comes a moment when an industry steps
                                forward and says, “We deserve better.” For beauty, health, and
                                wellness professionals, that moment is now.
                            </p>

                            <p>
                                OMNI CONNECTS is the first end-to-end digital ecosystem built by
                                someone who lived the industry, taught within it, mentored its
                                talent, and truly understands its challenges.
                            </p>

                            <p>
                                This is more than an app. It’s infrastructure. It’s empowerment.
                                It’s a digital home designed to give professionals the
                                visibility, tools, and community they’ve always deserved.
                            </p>
                        </div>

                        {/* STATS CARDS */}
                        <div className="mt-5 2xl:mt-10 flex gap-5 flex-wrap justify-center md:justify-start">
                            {stats.map((item, index) => (
                                <GradientCard
                                    key={index}
                                    className="rounded-3xl p-6 text-center w-40 2xl:w-50"
                                >
                                    <h4 className="text-2xl 2xl:text-4xl font-bold text-orange-500">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3 text-xs 2xl:text-base text-black/50">
                                        {item.description}
                                    </p>
                                </GradientCard>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
