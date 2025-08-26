import { Wheat, Shirt, Cog, Truck, Building2, Leaf, Zap, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const divisions = [
  {
    icon: Wheat,
    title: "Food Trading",
    description: "Premium agricultural products including rice, grains, and specialty foods sourced from the finest global producers."
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    description: "High-quality fabrics, garments, and textile solutions for fashion and industrial applications worldwide."
  },
  {
    icon: Cog,
    title: "Machinery & Equipment",
    description: "Advanced industrial machinery, construction equipment, and technological solutions for diverse industries."
  },
  {
    icon: Truck,
    title: "Automotive Parts",
    description: "Comprehensive range of automotive components and spare parts for manufacturers and service centers."
  },
  {
    icon: Building2,
    title: "Construction Materials",
    description: "Premium building materials, steel products, and construction supplies for infrastructure projects."
  },
  {
    icon: Leaf,
    title: "Chemicals & Commodities",
    description: "Industrial chemicals, raw materials, and specialty commodities for manufacturing and processing."
  },
  {
    icon: Zap,
    title: "Electronics & Technology",
    description: "Cutting-edge electronic components, consumer electronics, and technological solutions."
  },
  {
    icon: Package,
    title: "General Trading",
    description: "Diverse product portfolio including consumer goods, lifestyle products, and specialty items."
  }
];

export const DivisionsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Core Divisions
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            Spanning multiple industries and markets, our diverse divisions enable us to serve 
            clients across the global trade spectrum with expertise and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {divisions.map((division, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-background"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
                  <division.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-poppins text-xl font-semibold text-primary">
                  {division.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-muted-foreground text-center leading-relaxed">
                  {division.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};