import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Destinations', href: '#places' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent text-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer font-display text-2xl font-bold tracking-tight">
            <span className={isScrolled ? "text-primary" : "text-white"}>Malta</span>
            <span className="text-secondary">Tours</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold hover:text-secondary transition-colors",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="rounded-full px-6 ml-2"
            onClick={() => window.open('https://wa.me/35699468450', '_blank')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 md:hidden flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground font-medium p-3 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full mt-2 bg-[#25D366] hover:bg-[#22bf5c] text-white"
            onClick={() => window.open('https://wa.me/35699468450', '_blank')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book via WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
}
