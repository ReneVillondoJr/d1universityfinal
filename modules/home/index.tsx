import { FaqPreview } from './components/faq-preview';
import { FinalCta } from './components/final-cta';
import { HeroSection } from './components/hero-section';
import { IntroSection } from './components/intro-section';
import { ProgramPillars } from './components/program-pillars';
import { Testimonials } from './components/testimonials';
import { UniversityNetwork } from './components/university-network';
import { UpcomingEvents } from './components/upcoming-events';

export function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ProgramPillars />
      <UniversityNetwork />
      <UpcomingEvents />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </div>
  );
}
