import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Globe className="w-8 h-8 text-primary mr-3" />
            <div>
              <h1 className="font-poppins text-xl font-bold text-primary">MM Venturas FZE LLC</h1>
              <p className="font-poppins text-xs text-accent font-medium">Your Global Growth Partner</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-poppins text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('divisions')}
              className="font-poppins text-muted-foreground hover:text-primary transition-colors"
            >
              Divisions
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="font-poppins text-muted-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('vision-mission')}
              className="font-poppins text-muted-foreground hover:text-primary transition-colors"
            >
              Vision & Mission
            </button>
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              variant="default"
              size="sm"
              className="font-poppins font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="font-poppins text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('divisions')}
                className="font-poppins text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Divisions
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')}
                className="font-poppins text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('vision-mission')}
                className="font-poppins text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Vision & Mission
              </button>
              <Button 
                onClick={() => setIsContactFormOpen(true)}
                variant="default"
                size="sm"
                className="font-poppins font-semibold w-fit"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </nav>
  );
};