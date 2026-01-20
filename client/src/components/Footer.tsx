import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">
              Malta<span className="text-secondary">Tours</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-sm">
              Discover the rich history and beautiful landscapes of Malta with our premium executive taxi tours. Comfort, class, and culture combined.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Our Packages</a></li>
              <li><a href="#places" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>123 Republic Street,<br />Valletta, Malta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+35699999999" className="hover:text-white">+356 99 99 99 99</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@maltatours.com" className="hover:text-white">info@maltatours.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} MaltaTours. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
