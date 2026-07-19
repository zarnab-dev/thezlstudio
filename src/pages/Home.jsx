import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import PlatformOverview from '../components/PlatformOverview'
import DiscoveryModes from '../components/DiscoveryModes'
import ChamberSection from '../components/ChamberSection'
import AgentsSection from '../components/AgentsSection'
import AudienceIntelligence from '../components/AudienceIntelligence'
import CreatorDiscovery from '../components/CreatorDiscovery'
import AutomationFlow from '../components/AutomationFlow'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import ForCreators from '../components/ForCreators'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <PlatformOverview />
      <DiscoveryModes />
      <ChamberSection />
      <AgentsSection />
      <AudienceIntelligence />
      <CreatorDiscovery />
      <AutomationFlow />
      <StatsSection />
      <Testimonials />
      <ForCreators />
      <FAQ />
      <CTASection />
    </>
  )
}
