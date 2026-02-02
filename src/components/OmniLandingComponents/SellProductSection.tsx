import Button from "./Button";
import revenueImg from "../../assets/images/revenue-img.png"; // graph image
import { ShoppingBag, MapPin } from "lucide-react";
import GradientIconCard from "./GradientIconCard";

function SellProductsSection() {
    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="my-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT – Image */}
                    <div className="flex justify-center">
                        <img
                            src={revenueImg}
                            alt="Revenue Dashboard"
                            className="w-full max-w-xl rounded-[40px]"
                        />
                    </div>

                    {/* RIGHT – Content */}
                    <div className="max-w-xl">

                        {/* Badge */}
                        <Button
                            variant="tertiary"
                            className="mb-6 bg-white text-orange-500 px-5 py-1.5 font-semibold"
                        >
                            BUSINESS INTELLIGENCE
                        </Button>

                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
                            Sell Products &{" "}
                            <span className="text-orange-500">Services</span>
                        </h2>

                        {/* Features */}
                        <div className="mt-10 space-y-8">

                            {/* Feature 1 */}
                            <div className="flex gap-5">
                                <GradientIconCard icon={ShoppingBag} className="shrink-0" />
                                <div>
                                    <h4 className="text-lg sm:text-xl 2xl:text-3xl font-bold text-black">
                                        Integrated Shop
                                    </h4>
                                    <p className="mt-1 text-sm sm:text-lg 2xl:text-xl text-black/60 leading-relaxed">
                                        Your clients can buy your curated products directly
                                        while booking their services. One flow, multiple
                                        revenue streams.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-5">
                                    <GradientIconCard icon={MapPin} className="shrink-0" />
                                <div>
                                    <h4 className="text-lg sm:text-xl 2xl:text-3xl font-bold text-black">
                                        ZIP-Code Analytics
                                    </h4>
                                    <p className="mt-1 ttext-sm sm:text-lg 2xl:text-xl text-black/60 leading-relaxed">
                                        Know exactly where your revenue is coming from and
                                        where to target your next ad campaign with
                                        hyper-local precision.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SellProductsSection;
