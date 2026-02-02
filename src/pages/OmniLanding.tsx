import AboutSection from "../components/OmniLandingComponents/AboutSection"
import AdvertisingSection from "../components/OmniLandingComponents/AdvertisementSection"
import BookingModesSection from "../components/OmniLandingComponents/BookingSection"
import CommunitySection from "../components/OmniLandingComponents/CommunitySection"
import CTASection from "../components/OmniLandingComponents/CTASection"
import ExperienceSection from "../components/OmniLandingComponents/ExperienceSection"
import FAQSection from "../components/OmniLandingComponents/FAQSection"
import Footer from "../components/OmniLandingComponents/Footer"
import Hero from "../components/OmniLandingComponents/Hero"
import IndustrySection from "../components/OmniLandingComponents/IndustrySection"
import InfraStructureSection from "../components/OmniLandingComponents/InfraStructureSection"
import PlatformSection from "../components/OmniLandingComponents/PlatformSection"
import SellProductsSection from "../components/OmniLandingComponents/SellProductSection"

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
      <BookingModesSection/>
      <SellProductsSection/>
      <AdvertisingSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default OmniLanding