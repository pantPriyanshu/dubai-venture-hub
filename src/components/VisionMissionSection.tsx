import { Rocket, Target } from "lucide-react";

export const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary">
                Our Vision
              </h2>
            </div>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-6">
              To become the most trusted and innovative global trading partner, bridging markets 
              and cultures while creating sustainable value for all stakeholders.
            </p>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
              We envision a world where international trade flows seamlessly, fostering economic 
              growth and prosperity across all regions we serve.
            </p>
          </div>
          
          {/* Mission */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center mb-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary">
                Our Mission
              </h2>
            </div>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-6">
              To facilitate seamless global trade by connecting quality suppliers with discerning 
              buyers, while maintaining the highest standards of integrity, reliability, and excellence.
            </p>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
              We are committed to delivering exceptional value through our diverse portfolio, 
              strategic insights, and unwavering dedication to customer success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};