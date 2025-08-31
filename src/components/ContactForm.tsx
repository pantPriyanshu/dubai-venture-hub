import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    division: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Our team will contact you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        division: "",
        message: ""
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins text-2xl font-bold text-primary mb-2">
            Get in Touch with MM Venturas
          </DialogTitle>
          <p className="font-poppins text-muted-foreground">
            Ready to explore global trade opportunities? Send us a message and let's discuss how we can help grow your business.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-poppins font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                required
                className="font-poppins"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-poppins font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@company.com"
                required
                className="font-poppins"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="font-poppins font-medium">
                Company Name
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
                className="font-poppins"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-poppins font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+971 4 XXX XXXX"
                className="font-poppins"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="division" className="font-poppins font-medium">
              Area of Interest
            </Label>
            <Select value={formData.division} onValueChange={(value) => handleInputChange("division", value)}>
              <SelectTrigger className="font-poppins">
                <SelectValue placeholder="Select a division or service" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border shadow-lg z-50">
                <SelectItem value="food-trading">Food Trading</SelectItem>
                <SelectItem value="textiles">Textiles & Apparel</SelectItem>
                <SelectItem value="machinery">Machinery & Equipment</SelectItem>
                <SelectItem value="automotive">Automotive Parts</SelectItem>
                <SelectItem value="construction">Construction Materials</SelectItem>
                <SelectItem value="chemicals">Chemicals & Commodities</SelectItem>
                <SelectItem value="electronics">Electronics & Technology</SelectItem>
                <SelectItem value="general">General Trading</SelectItem>
                <SelectItem value="other">Other / General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-poppins font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your requirements, project details, or any questions you have..."
              rows={4}
              required
              className="font-poppins resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="font-poppins font-semibold flex-1"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="font-poppins font-semibold"
            >
              Cancel
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="font-poppins text-sm font-medium text-muted-foreground mb-4">
            Or reach us directly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <span className="font-poppins">info@mmventurafze.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-primary mr-2" />
              <span className="font-poppins">+971 4 XXX XXXX</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-primary mr-2" />
              <span className="font-poppins">Dubai, UAE</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};