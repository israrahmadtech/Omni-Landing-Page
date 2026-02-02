import purposeImg from "../../assets/images/purpose-img.png"
import purposeIcon from "../../assets/icons/purpose-icon.png"

function PurposeSection() {
    return (
        <section id="platform" className="sm:px-10 lg:px-20 bg-[#140B09] pt-10 md:pt-0">
            <div className="my-container flex flex-col lg:flex-row items-center gap-5 sm:gap-10 lg:gap-20">

                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <img className="w-10 sm:w-20 -mb-5" src={purposeIcon} alt="" />
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
                        Cut With <span className="text-orange-400">Purpose</span>
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                        The written blueprint of that path—a blend of business systems, mindset, consultation strategy, professionalism, and the real guidance every beauty professional wishes they had on day one.
                    </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src={purposeImg}
                        alt="Hector Oviedo holding book"
                        className="w-[80%] sm:w-full max-w-md object-contain rounded-lg"
                    />
                </div>

            </div>
        </section>

    )
}

export default PurposeSection