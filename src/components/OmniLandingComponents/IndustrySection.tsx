import barberImg from "../../assets/images/industry-img-1.png";
import stylistImg from "../../assets/images/industry-img-2.png";
import nailImg from "../../assets/images/industry-img-3.png";
import wellnessImg from "../../assets/images/industry-img-4.png";

function IndustrySection() {
    return (
        <section id="industry" className="py-10">
            <div className="bg-black py-28 lg:mx-20 rounded-3xl md:rounded-[64px]">
                <div className="my-container">

                    {/* Heading */}
                    <h2 className="max-w-2xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                        Built for the <br />
                        Entire <span className="text-orange-500">Industry</span>
                    </h2>

                    {/* Cards */}
                    <div className="mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="group relative h-[420px] rounded-[32px] overflow-hidden"
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/80"></div>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/30" />

                                {/* Title */}
                                <h3 className="absolute bottom-6 left-6 text-4xl font-semibold text-white">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default IndustrySection;


const industries = [
    { title: "Barbers", image: barberImg },
    { title: "Stylists", image: stylistImg },
    { title: "Nail Techs", image: nailImg },
    { title: "Wellness", image: wellnessImg },
];
