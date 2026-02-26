import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import FeaturesListSection from '../components/FeaturesListSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import TestimonialSection from '../components/TestimonialSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="systems">
          <FeatureSection />
        </div>
        <FeaturesListSection />
        <StatsSection />
        <CTASection />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
