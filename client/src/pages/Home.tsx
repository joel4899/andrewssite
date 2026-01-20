import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PackageCard from '@/components/PackageCard';
import PlaceCard from '@/components/PlaceCard';
import Footer from '@/components/Footer';
import { useTours, usePlaces } from '@/hooks/use-tours';
import { Button } from '@/components/ui/button';

// Static assets
import taxi1 from "@assets/image_1768915604556.png";
import taxi2 from "@assets/image_1768915618537.png";

export default function Home() {
  const { data: tours, isLoading: isLoadingTours } = useTours();
  const { data: places, isLoading: isLoadingPlaces } = usePlaces();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={taxi1} 
            alt="Luxury Taxi in Malta" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg">
              Experience Malta's History <br/>
              <span className="text-secondary italic">in Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discover the hidden gems of the Mediterranean with our premium private tours. 
              Personalized journeys tailored to your pace and style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-xl shadow-black/20" asChild>
                <a href="#packages">View Packages</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="#places">Explore Destinations</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Tailored For You</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Choose Your Journey</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Whether you need a quick transfer or a full-day historical immersion, we have a package that suits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingTours ? (
              // Loading Skeletons
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-[500px] bg-white rounded-2xl animate-pulse shadow-sm" />
              ))
            ) : (
              tours?.map((tour) => (
                <PackageCard 
                  key={tour.id} 
                  tour={tour} 
                  isPopular={tour.tier === 'premium'}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* EXECUTIVE SHOWCASE */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           {/* Abstract pattern or texture could go here */}
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <Star className="w-5 h-5 fill-secondary" />
                  <span className="font-bold uppercase tracking-wider">Executive Service</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  Travel in Absolute <br/>
                  <span className="text-secondary">Luxury</span>
                </h2>
              </div>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Upgrade to our Executive tier for the ultimate Maltese experience. 
                Featuring premium Mercedes vehicles, complimentary refreshments, and priority booking flexibility.
                Perfect for business travel or special occasions.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Premium Mercedes Fleet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Professional Chauffeur</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Complimentary Wi-Fi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Bottled Water Included</span>
                </li>
              </ul>

              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8" asChild>
                <a href="#packages">Upgrade to Executive</a>
              </Button>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src={taxi2} 
                  alt="Executive Transport" 
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-display font-bold text-xl">Top Rated</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIC PLACES */}
      <section id="places" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Explore History</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Historic Landmarks</h2>
              <p className="text-muted-foreground mt-4">
                From the silent city of Mdina to the ancient temples of majestic Valletta. 
                Our tours cover the most significant sites in Maltese history.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">View Full Gallery</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingPlaces ? (
               // Loading Skeletons
               Array(3).fill(0).map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-muted rounded-xl animate-pulse" />
              ))
            ) : (
              places?.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))
            )}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/5 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Book your private tour today and let us take care of the details while you make the memories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg shadow-[#25D366]/20 px-8"
              onClick={() => window.open('https://wa.me/35699999999', '_blank')}
            >
              <span className="mr-2">WhatsApp Us</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8"
              onClick={() => window.location.href = 'mailto:info@maltatours.com'}
            >
              Email Enquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
