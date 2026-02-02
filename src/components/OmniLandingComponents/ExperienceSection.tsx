import Button from "./Button";

function ExperienceSection() {
    return (
        <section id="how-it-works" className="bg-[#FDFBF7] py-32">
            <div className="my-container text-center">

                {/* Badge */}
                <Button
                    variant="tertiary"
                    className="bg-white text-orange-500 px-5 py-1.5 font-semibold"
                >
                    <span className="tracking-[5px]">
                        THE EXPERIENCE
                    </span>
                </Button>

                {/* Heading */}
                <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
                    How it feels to{" "}
                    <span className="text-orange-500">use OMNI</span>
                </h2>

                {/* Steps */}
                <div className="mt-24 flex flex-wrap md:justify-center gap-y-20 gap-x-16 lg:gap-x-[10vw] text-start">
                    {steps.map((step, index) => (
                        <div key={index} className="relative max-w-xs w-full">

                            {/* Huge number */}
                            <span className="absolute -top-27 left-0 text-[120px] font-bold text-black/5 select-none">
                                {step.number}
                            </span>

                            {/* Content */}
                            <h3 className="relative text-2xl sm:text-3xl font-semibold text-black">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm sm:text-base md:text-lg text-black/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;


const steps = [
    {
        number: "01",
        title: "Create Your Profile",
        description: "Showcase your work, services, and story.",
    },
    {
        number: "02",
        title: "Connect & Get Booked",
        description: "Visibility turns into real clients.",
    },
    {
        number: "03",
        title: "Grow & Scale",
        description: "Sell, manage, advertise, and analyze.",
    },
];
