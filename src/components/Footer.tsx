import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-accent mr-3" />
              <h3 className="font-poppins text-2xl font-bold">MM Venturas FZE LLC</h3>
            </div>
            <p className="font-poppins text-accent text-lg font-medium mb-4">
              🌍 Your Global Growth Partner
            </p>
            <p className="font-poppins text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering businesses worldwide through strategic trading partnerships, 
              innovative solutions, and unwavering commitment to excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6 text-accent">Quick Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="font-poppins hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#divisions" className="font-poppins hover:text-accent transition-colors">Our Divisions</a></li>
              <li><a href="#why-choose" className="font-poppins hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#vision-mission" className="font-poppins hover:text-accent transition-colors">Vision & Mission</a></li>
              <li><a href="#contact" className="font-poppins hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6 text-accent">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-sm">Dubai, UAE</p>
                  <p className="font-poppins text-sm text-primary-foreground/80">Free Zone</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <p className="font-poppins text-sm">info@mmventurafze.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <p className="font-poppins text-sm">+971 4 XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="font-poppins text-sm text-primary-foreground/60">
              © 2024 MM Venturas FZE LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};