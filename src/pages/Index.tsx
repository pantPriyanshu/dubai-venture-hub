import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DivisionsSection } from "@/components/DivisionsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="divisions">
        <DivisionsSection />
      </div>
      <div id="why-choose">
        <WhyChooseSection />
      </div>
      <div id="vision-mission">
        <VisionMissionSection />
      </div>
      <div id="contact">
        <ContactCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
