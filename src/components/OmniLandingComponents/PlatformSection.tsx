import Button from "./Button";
import GradientCard from "./GradientCard";

import { Calendar, Users, ShoppingBag, MessageSquare, UserCog, Megaphone, BarChart3, Smartphone } from "lucide-react";
import GradientIconCard from "./GradientIconCard";

function PlatformSection() {
    return (
        <section id="platform" className="py-28 bg-white">
            <div className="my-container">

                {/* HEADER */}
                <div className="text-center 2xl:max-w-5xl mx-auto">
                    <Button
                        variant="tertiary"
                        className="bg-white text-orange-500 px-5 py-1.5 font-semibold"
                    >
                        OMNI INFRASTRUCTURE
                    </Button>

                    <h2 className="mt-3 2xl:mt-6 text-3xl sm:text-4xl xl::text-5xl 2xl:text-6xl font-bold text-black">
                        One <span className="text-orange-500">Platform</span> Infinite Possibility
                    </h2>

                    <p className="mt-2 2xl:mt-4 text-black/60 text-base text-sm sm:text-base 2xl:text-xl">
                        We've consolidated everything you need to run your business,
                        grow your brand, and connect with your community.
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="mt-10 2xl:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {platformFeatures.map((item, index) => {
                        return (
                            <GradientCard
                                key={index}
                                className="rounded-[28px] px-7 2xl:px-8 py-7 2xl:py-15 bg-white"
                            >
                                <div className="flex flex-col gap-2 2xl:gap-4 text-left">
                                    <GradientIconCard className="bg-white/30" icon={item.icon} />

                                    <h4 className="text-lg text-xl 2xl:lg:text-2xl font-semibold text-black">
                                        {item.title}
                                    </h4>   

                                    <p className="text-sm text-base 2xl:text-lg text-black/50 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </GradientCard>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default PlatformSection;

const platformFeatures = [
    {
        icon: Calendar,
        title: "Booking",
        desc: "Dual system for at-home or in-shop flow.",
    },
    {
        icon: Users,
        title: "Community Feed",
        desc: "Where visibility turns into real clients.",
    },
    {
        icon: ShoppingBag,
        title: "E-commerce",
        desc: "Sell products directly from your profile.",
    },
    {
        icon: MessageSquare,
        title: "Messaging",
        desc: "Keep all client communication in one home.",
    },
    {
        icon: UserCog,
        title: "Team Management",
        desc: "Scales without killing your shop culture.",
    },
    {
        icon: Megaphone,
        title: "Advertising",
        desc: "AMS built for beauty industry context.",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        desc: "Deep ZIP-code insights for your growth.",
    },
    {
        icon: Smartphone,
        title: "Web + App Sync",
        desc: "Work anywhere, grow everywhere.",
    },
];
