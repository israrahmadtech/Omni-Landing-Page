import GlassCard from "./GlassEffectCard";

function BookingModesSection() {
    return (
        <section id="business" className="py-24">
            <div className="sm:my-container bg-black py-15 sm:py-28 lg:mx-20 rounded-3xl md:rounded-[64px]">

                <div className="my-container">
                    {/* Heading */}
                    <h2 className="text-center max-w-4xl mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold leading-tight sm:leading-none text-white">
                        Run Your Business{" "}
                        <span className="text-orange-500">Anywhere.</span>{" "}
                        Grow Everywhere
                    </h2>

                    <p className="mt-5 2xl:mt-10 text-center text-lg 2xl:text-xl text-white/50 max-w-xl mx-auto">
                        The most flexible booking logic in the beauty industry.
                    </p>

                    {/* Cards */}
                    <div className="mt-10 sm:mt-15 lg:mt-20 flex flex-wrap lg:flex-nowrap justify-center gap-15">

                        {/* At Home */}
                        <GlassCard className="p-10 rounded-[36px] flex flex-col justify-between w-full max-w-xl">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl sm:text-4xl 2xl:text-5xl font-semibold text-white">
                                        At-Home
                                    </h3>

                                    <span className="px-4 py-1 rounded-full bg-orange-500 text-xs font-semibold text-white">
                                        PREMIUM
                                    </span>
                                </div>

                                <p className="mt-6 text-base sm:text-lg 2xl:text-2xl text-white/50 leading-relaxed max-w-md">
                                    Offer premium services at the client’s location with built-in
                                    travel logic and safety protocols.
                                </p>
                            </div>

                            <button className="mt-10 text-orange-500 font-semibold flex items-center gap-2">
                                Learn More →
                            </button>
                        </GlassCard>

                        {/* In Shop */}
                        <GlassCard className="p-10 rounded-[36px] flex flex-col justify-between w-full max-w-xl">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl sm:text-4xl 2xl:text-5xl font-semibold text-white">
                                        In-Shop
                                    </h3>

                                    <span className="px-4 py-1 rounded-full bg-white text-xs font-semibold text-black">
                                        STANDARD
                                    </span>
                                </div>

                                <p className="mt-6 text-base sm:text-lg 2xl:text-2xl text-white/50 leading-relaxed max-w-md">
                                    Manage chair rentals, shop commissions, and walk-ins with
                                    real-time availability sync.
                                </p>
                            </div>

                            <button className="mt-10 text-orange-500 font-semibold flex items-center gap-2">
                                Learn More →
                            </button>
                        </GlassCard>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookingModesSection