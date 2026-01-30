import AboutSection from "../components/LandingComponents/AboutSection"
import ExperienceSection from "../components/LandingComponents/ExperienceSection"
import Footer from "../components/LandingComponents/Footer"
import FounderMissionSection from "../components/LandingComponents/FounderMissionSection"
import Hero from "../components/LandingComponents/Hero"
import HectorsJourneySection from "../components/LandingComponents/JourneySection"
import ProblemSection from "../components/LandingComponents/ProblemSection"
import PurposeSection from "../components/LandingComponents/PurposeSection"
import WhyOmniExistsSection from "../components/LandingComponents/WhyOmniExistSection"

function Landing() {
    return (
        <div className="bg-black">
            <Hero />
            <AboutSection/>
            <PurposeSection/>
            <ProblemSection/>
            <ExperienceSection/>
            <WhyOmniExistsSection/>
            <FounderMissionSection/>
            <HectorsJourneySection/>
            <Footer/>
        </div>
    )
}

export default Landing