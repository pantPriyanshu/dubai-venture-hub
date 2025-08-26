import { Button } from "@/components/ui/button";
import contactBackground from "@/assets/contact-cta-background.jpg";

export const ContactCTASection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="font-poppins text-4xl md:text-6xl font-bold mb-6">
          Partner with Us Today
        </h2>
        <p className="font-poppins text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Ready to expand your global reach? Let's explore how MM Venturas can drive 
          your business growth through strategic partnerships and expert trade solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="font-poppins font-semibold text-lg px-10 py-4 shadow-gold hover:shadow-gold/60 transition-all duration-300"
          >
            Contact Us
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-poppins font-semibold text-lg px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-corporate"
          >
            Request Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};