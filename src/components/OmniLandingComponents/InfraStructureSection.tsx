import GradientCard from "./GradientCard"

function InfraStructureSection() {
  return (
    <section className="my-container py-20">
      <h1 className="my-8 mb-0 sm:mb-8 font-bold text-center tracking-tight leading-none text-black text-[25px] sm:text-[30px] lg:text-[60px] 2xl:text-[80px]">
        This is Not an App <span className="block text-orange-500">This is Infrastructure</span>
      </h1>
      {/* Cards */}
      <div className="w-full px-4 flex justify-center flex-wrap lg:flex-nowrap gap-5 sm:gap-10 2xl:gap-16 py-10">
        {cardsData.map((item, index) => (
          <GradientCard
            key={index}
            className="rounded-3xl p-8 sm:p-10 text-center w-full max-w-sm 2xl:max-w-md"
          >
            <h3 className="text-2xl sm:text-2.5xl 2xl:text-4xl font-semibold text-black">
              {item.title.replace(".", "")}
              <span className="text-orange-500 font-bold">.</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base 2xl:text-xl leading-relaxed text-black/50">
              {item.description}
            </p>
          </GradientCard>
        ))}
      </div>
    </section>
  )
}

export default InfraStructureSection

const cardsData = [
  {
    title: "Empowerment.",
    description:
      "A movement rooted in respect for the craft, the culture, and the people who dedicate their lives to helping others look and feel their best.",
  },
  {
    title: "Unity.",
    description:
      "The first digital ecosystem combining booking, commerce, and community into one unified platform for millions.",
  },
  {
    title: "Purpose.",
    description:
      "Built by someone who lived the industry, walked the spas, and felt the heartbeat of a world that deserved better tools.",
  },
];
