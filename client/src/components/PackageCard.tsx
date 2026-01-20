import { motion } from 'framer-motion';
import { MessageCircle, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Tour } from '@shared/schema';

interface PackageCardProps {
  tour: Tour;
  isPopular?: boolean;
}

export default function PackageCard({ tour, isPopular }: PackageCardProps) {
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in booking the ${tour.name} package (€${tour.price}). Can you provide more details?`;
    window.open(`https://wa.me/35699999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    const subject = `Booking Inquiry: ${tour.name}`;
    const body = `Hi,\n\nI would like to book the ${tour.name} package for €${tour.price}.\n\nPlease let me know availability.\n\nThanks!`;
    window.location.href = `mailto:bookings@maltatours.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col bg-white rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        isPopular ? "border-primary shadow-primary/10 ring-2 ring-primary/5" : "border-border"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
          Most Popular
        </div>
      )}

      <div className="p-8 pb-4">
        <h3 className="text-2xl font-display font-bold text-primary mb-2">{tour.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">{tour.description}</p>
        
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">€{tour.price}</span>
          <span className="text-muted-foreground text-sm">/tour</span>
        </div>
      </div>

      <div className="px-8 py-4 flex-1">
        <ul className="space-y-3">
          {tour.features?.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <Check className="w-5 h-5 text-secondary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-4 space-y-3 mt-auto">
        <Button 
          variant="whatsapp" 
          className="w-full gap-2 font-semibold"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-4 h-4" />
          Book via WhatsApp
        </Button>
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={handleEmail}
        >
          <Mail className="w-4 h-4" />
          Book via Email
        </Button>
      </div>
    </motion.div>
  );
}
