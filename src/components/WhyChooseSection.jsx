import { Globe, Building, Package, Star, Users } from "lucide-react";
import worldMapBackground from "@/assets/world-map-background.jpg";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Extensive network spanning across continents with established trade relationships worldwide."
  },
  {
    icon: Building,
    title: "Dubai Advantage",
    description: "Strategic location in Dubai's business hub providing access to emerging and established markets."
  },
  {
    icon: Package,
    title: "Diverse Portfolio",
    description: "Comprehensive range of products and services across multiple industries and sectors."
  },
  {
    icon: Star,
    title: "Quality Commitment",
    description: "Unwavering dedication to excellence in every transaction and business relationship."
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "Personalized solutions and dedicated support tailored to each client's unique requirements."
  }
];

export const WhyChooseSection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${worldMapBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose MM Venturas
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of global expertise, strategic positioning, and customer focus 
            makes us the ideal partner for your international trade needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300 shadow-corporate">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-poppins text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};