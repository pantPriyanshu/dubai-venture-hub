import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dubai-skyline-hero.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-white">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empowering Global Trade,
          <span className="block text-accent">Enriching Everyday Life</span>
        </h1>
        
        <p className="font-poppins text-xl md:text-2xl mb-8 text-accent font-medium">
          Your Global Growth Partner
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="font-poppins font-semibold text-lg px-8 py-4 shadow-gold hover:shadow-gold/60 transition-all duration-300"
          >
            Explore Our Divisions
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-poppins font-semibold text-lg px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-corporate"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};