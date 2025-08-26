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
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <WhyChooseSection />
      <VisionMissionSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
};

export default Index;
