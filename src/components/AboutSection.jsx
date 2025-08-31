import businessPartnership from "@/assets/business-partnership.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
              About MM Venturas FZE LLC
            </h2>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-6">
              Based in the heart of Dubai, MM Venturas FZE LLC stands as a premier global trading company 
              connecting markets across continents. We specialize in facilitating international trade 
              through our diverse portfolio of divisions, ranging from essential commodities to advanced machinery.
            </p>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-6">
              Our strategic location in Dubai's thriving business ecosystem provides us with unparalleled 
              access to emerging markets and established trade routes, enabling us to deliver exceptional 
              value to our partners worldwide.
            </p>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
              With a commitment to excellence and innovation, we bridge the gap between suppliers and 
              consumers, fostering sustainable business relationships that drive mutual growth and prosperity.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={businessPartnership} 
              alt="Professional business partnership" 
              className="rounded-2xl shadow-card w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-gold rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-primary rounded-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};