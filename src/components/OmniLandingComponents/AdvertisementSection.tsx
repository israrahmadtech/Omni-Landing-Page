import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

function AdvertisingSection() {
    return (
        <section className="relative overflow-hidden bg-orange-500 py-28">
            <div className="my-container relative z-10">

                {/* Badge */}
                <Button
                    variant="tertiary"
                    className="mb-6 bg-white/10 text-white px-5 py-1.5 font-semibold backdrop-blur"
                >
                    ADVERTISING MANAGEMENT SYSTEM
                </Button>

                {/* Content */}
                <div className="max-w-5xl">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold leading-tight text-white">
                        Beauty Advertising in <br />
                        Beauty’s Hands
                    </h2>

                    <p className="mt-6 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white/80 leading-relaxed max-w-2xl">
                        Don&apos;t let Big Tech dictate your reach. Target real clients
                        in your area through our native community placements and
                        transparent analytics.
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                        <Link to="/">
                            <Button
                                icon={<ArrowRight size={20} />}
                                variant="primary"
                                className="cursor-pointer bg-white text-black hover:bg-white/90 2xl:text-xl"
                            >
                                Run Ads on OMNI
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background AMS Text */}
            <div className="pointer-events-none absolute top-10 right-0 lg:right-[18%] flex items-center">
                <span className="pr-10 text-[20vw] lg:text-[15vw] font-bold text-white/10 leading-none select-none">
                    AMS
                </span>
            </div>
        </section>
    );
}

export default AdvertisingSection;
