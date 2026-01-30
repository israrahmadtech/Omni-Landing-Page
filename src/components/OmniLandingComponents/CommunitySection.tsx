import { ArrowRight, CheckCircle2 } from 'lucide-react'
import mobileImg from '../../assets/images/mobile-img.png'
import Button from './Button'

function CommunitySection() {
    return (
        <section id="community" className="relative overflow-hidden bg-[#FDFBF7] py-24">

            <div className="my-container relative z-10 grid items-center gap-16 lg:grid-cols-2">
                {/* Left content */}
                <div className="">
                    <Button
                        variant="tertiary"
                        className="bg-white text-orange-500 px-5 py-1.5 font-semibold"
                    >
                        WHERE VISIBILITY BECOMES OPPORTUNITY
                    </Button>

                    <h2 className="mt-10 text-[5vw] font-bold leading-22 text-black">
                        Posts Become
                        <span className="block text-orange-500">Income</span>
                    </h2>

                    <p className="mt-15 text-2xl text-black/60 max-w-xl">
                        OMNI introduced a dedicated beauty-centered social network where every post has purpose. Social media finally built for the people who make beauty happen.
                    </p>

                    <ul className="mt-15 space-y-3 text-2xl text-black/70 font-semibold">
                        <li className="flex items-center gap-3">
                            <span className="rounded-full p-1 bg-orange-500">
                                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                            </span>
                            <span>Attention becomes bookings instantly</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="rounded-full p-1 bg-orange-500">
                                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                            </span>
                            <span>Share posts outside for viral reach</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="rounded-full p-1 bg-orange-500">
                                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                            </span>
                            <span>Teach, inspire, and build a loyal audience</span>
                        </li>
                    </ul>

                    <div className="mt-15">
                        <Button icon={<ArrowRight size={20} />} variant="primary" className="bg-black">
                            EXPLORE THE COMMUNITY
                        </Button>
                    </div>
                </div>

                {/* Right image */}
                <div className="relative flex justify-center">
                    {/* radial background */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,186,120,0.35)_0%,rgba(255,186,120,0.25)_25%,rgba(255,186,120,0.15)_45%,transparent_65%)]" />
                    <img
                        src={mobileImg}
                        alt="Community App"
                        className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[60%] rotate-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default CommunitySection