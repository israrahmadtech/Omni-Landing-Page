import { Plus } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const faqs = [
    {
        question: "Who Is OMNI CONNECTS For?",
        answer:
            "OMNI CONNECTS is built for the entire beauty, health, and wellness industry — including barbers, stylists, nail technicians, estheticians, wellness providers, students, independent freelancers, multi-employee shops, and beauty brands."
    },
    {
        question: "How Does OMNI CONNECTS Work?",
        answer:
            "OMNI CONNECTS unifies booking, community content, e-commerce, and business tools into one platform. Professionals create profiles, showcase their work, connect with clients, accept bookings, and grow their businesses. Clients browse services, book appointments, shop products, and engage with industry talent — all in one place."
    },
    {
        question: "What Services Can Clients Book on OMNI CONNECTS?",
        answer:
            "Clients can book a wide range of beauty, health, and wellness services, including hair, nails, skin care, lashes, makeup, grooming, massage, body treatments, and wellness sessions — both at home and in-shop — through one trusted booking experience."
    },
    {
        question: "Is OMNI CONNECTS Free?",
        answer:
            "Yes. OMNI CONNECTS is free for clients and free for professionals to get started. Optional paid plans unlock advanced tools such as e-commerce, team management, analytics, advertising, and enhanced growth features."
    },
    {
        question: "What Makes OMNI CONNECTS Different?",
        answer:
            "OMNI CONNECTS is built specifically for beauty, health, and wellness. It combines booking, community, commerce, advertising, and business tools into one unified ecosystem — designed to turn visibility into real opportunity."
    },
    {
        question: "Where Is OMNI CONNECTS Available?",
        answer:
            "OMNI CONNECTS is available across the United States via both web and mobile app."
    },
    {
        question: "Is OMNI CONNECTS Secure?",
        answer:
            "Yes. OMNI CONNECTS uses encrypted data handling, secure authentication, and industry-standard privacy protections across web and mobile."
    },
    {
        question: "How Does OMNI CONNECTS Support Beauty Schools?",
        answer:
            "OMNI CONNECTS helps beauty schools promote their programs, elevate students, and build brand visibility while supporting student growth and early industry exposure."
    }
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#FDFBF7]">
            <div className="my-container max-w-5xl">

                {/* Badge */}
                <div className="flex justify-center">
                    <Button
                        variant="tertiary"
                        className="mb-6 bg-white text-orange-500 px-5 py-1.5 font-semibold 2xl:text-xl"
                    >
                        FAQ
                    </Button>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                    Common <span className="text-orange-500">Questions</span>
                </h2>

                {/* FAQ List */}
                <div className="mt-10 sm:mt-20">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border-b border-black/20">
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="cursor-pointer w-full flex items-center justify-between py-8 text-left"
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                                        {faq.question}
                                    </h3>

                                    <span className="flex h-7 sm:h-9 w-7 sm:w-9 shrink-0 items-center justify-center rounded-full bg-black/5">
                                        <Plus
                                            className={`h-4 sm:h-5 w-4 sm:w-5 text-black transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : ""
                                            }`}
                                        />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen
                                            ? "max-h-[500px] opacity-100 translate-y-0"
                                            : "max-h-0 opacity-0 -translate-y-2"
                                    }`}
                                >
                                    <div className="pb-8 pt-1 max-w-3xl">
                                        <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default FAQSection;
