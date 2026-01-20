import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Place } from '@shared/schema';

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {/* Using the image URL from the database, which will be Unsplash URLs */}
        {/* In a real scenario, always ensure we fallback if image fails */}
        <img 
          src={place.imageUrl} 
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2 text-secondary">
          <MapPin className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Historic Site</span>
        </div>
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">
          {place.name}
        </h3>
        <p className="text-sm text-white/90 line-clamp-2 group-hover:line-clamp-none transition-all">
          {place.description}
        </p>
      </div>
    </motion.div>
  );
}
