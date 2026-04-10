import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-display font-bold text-white">
              Malta<span className="text-secondary">Tours</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Discover the rich history and beautiful landscapes of Malta with our premium executive taxi tours. Comfort, class, and culture combined.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-white/60 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li><a href="#packages" className="hover:text-white transition-colors">Our Packages</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#places" className="hover:text-white transition-colors">Historic Destinations</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>123 Republic Street,<br />Valletta, Malta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+35699468450" className="hover:text-white transition-colors">+356 9946 8450</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:info@maltatours.com" className="hover:text-white transition-colors">info@maltatours.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href="https://wa.me/35699468450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Operating Hours</h3>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-semibold text-white">We're Available 24/7</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-white">06:00 – 23:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white">07:00 – 22:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white">08:00 – 21:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Airport Transfers</span>
                <span className="text-secondary font-semibold">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} MaltaTours. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40">
            Licensed taxi operator · Malta
          </p>
        </div>
      </div>
    </footer>
  );
}
