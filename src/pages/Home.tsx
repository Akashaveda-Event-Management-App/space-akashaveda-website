import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhatIsChakravyuh from '../components/WhatIsChakravyuh';
import AutonomousOpsLoop from '../components/AutonomousOpsLoop';
import DataJourney from '../components/DataJourney';
import ChakraSection from '../components/ChakraSection';
import VyuhSection from '../components/VyuhSection';
import ScaleArchitecture from '../components/ScaleArchitecture';
import UseCases from '../components/UseCases';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Integrated Ground Segment Infrastructure for Satellite Operators"
        description="Akashaveda delivers integrated ground segment infrastructure for satellite operators, combining ground communications, mission operations, and space situational awareness into a unified system."
        canonical="/"
      />
      <main>
        {/* 01. Hero Section */}
        <Hero />

        {/* 02. What is Chakravyuh? (System Overview) */}
        <WhatIsChakravyuh />

        {/* 03. Autonomous Operations Loop */}
        <AutonomousOpsLoop />

        {/* 04. From Space to Ground (Data Journey) */}
        <DataJourney />

        {/* 05. Chakra (Space Situational Awareness) */}
        <ChakraSection />

        {/* 06. Vyuh (Mission Control System) */}
        <VyuhSection />

        {/* 07. Scale & Architecture */}
        <ScaleArchitecture />

        {/* 08. Use Cases & Applications */}
        <UseCases />

        {/* 09. Footer CTA */}
        <FooterCTA />
      </main>
    </>
  );
}
