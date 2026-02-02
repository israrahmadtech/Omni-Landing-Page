import Button from "./Button";

function CTASection() {
    return (
        <section className="py-15 sm:py-24">
            <div className="my-container relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF5F1] to-[#E8F1FF] py-15 sm:py-32 rounded-[60px]">

                {/* Background OMNI watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="text-[30vw] font-extrabold text-black/5 select-none leading-none">
                        OMNI
                    </span>
                </div>

                <div className="relative z-10 my-container flex flex-col items-center text-center">

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold text-black max-w-xl 2xl:max-w-4xl">
                        The Future of{" "}
                        <span className="text-orange-500">Beauty</span>{" "}
                        Lives Here
                    </h2>

                    {/* Subheading */}
                    <p className="mt-6 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-black/50">
                        One System. One Heart. One Beat.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-5 sm:mt-10 2xl:mt-20">
                        <Button
                            variant="primary"
                            className="bg-orange-500 text-white hover:bg-orange-600"
                        >
                            JOIN OMNI CONNECTS
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CTASection;
