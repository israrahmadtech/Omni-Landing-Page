import AboutSection from "../components/OmniLandingComponents/AboutSection"
import CommunitySection from "../components/OmniLandingComponents/CommunitySection"
import ExperienceSection from "../components/OmniLandingComponents/ExperienceSection"
import Hero from "../components/OmniLandingComponents/Hero"
import IndustrySection from "../components/OmniLandingComponents/IndustrySection"
import InfraStructureSection from "../components/OmniLandingComponents/InfraStructureSection"
import PlatformSection from "../components/OmniLandingComponents/PlatformSection"

function OmniLanding() {
  return (
    <div className="bg-white">
      <Hero/>
      <InfraStructureSection/>
      <AboutSection/>
      <PlatformSection/>
      <IndustrySection/>
      <ExperienceSection/>
      <CommunitySection/>
    </div>
  )
}

export default OmniLanding