import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Star, Users, Award, Clock, MessageCircle, MapPin, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PackageCard from '@/components/PackageCard';
import PlaceCard from '@/components/PlaceCard';
import Footer from '@/components/Footer';
import { useTours, usePlaces } from '@/hooks/use-tours';
import { Button } from '@/components/ui/button';

// Static assets
const taxi1 = "https://upload.wikimedia.org/wikipedia/commons/4/43/Renault_Fluence_1.6_Expression_2017_%2854353526858%29.jpg";
import taxi2 from "@assets/image_1768915618537.png";

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "5.0★", label: "Average Rating", icon: Star },
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "24/7", label: "Available", icon: Clock },
];

const steps = [
  {
    icon: Search,
    title: "Choose Your Package",
    desc: "Browse our curated tour packages and select the experience that matches your interests and budget.",
  },
  {
    icon: MessageCircle,
    title: "Book in Seconds",
    desc: "Contact us via WhatsApp or email. We confirm availability and lock in your booking within minutes.",
  },
  {
    icon: MapPin,
    title: "Enjoy Your Tour",
    desc: "Your professional driver will meet you at your location and guide you through Malta's finest attractions.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Absolutely incredible experience! Our driver was so knowledgeable about Maltese history. The tour of Valletta and Mdina was the highlight of our entire trip. Highly recommend!",
    avatar: "SM",
  },
  {
    name: "Marco Bianchi",
    location: "Rome, Italy",
    rating: 5,
    text: "We booked the Executive package and it was worth every euro. The Mercedes was spotless, the driver was punctual and professional, and the route was perfectly curated.",
    avatar: "MB",
  },
  {
    name: "James Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "Best decision of our Malta holiday! We saw so much more than we would have on our own. The driver knew all the hidden gems and secret viewpoints. Book this — you won't regret it!",
    avatar: "JT",
  },
];

const faqs = [
  {
    q: "How do I book a tour?",
    a: "Simply click 'Book via WhatsApp' on any package or use the booking widget above. We respond within minutes and confirm your booking on the spot — no forms, no waiting.",
  },
  {
    q: "What's included in the price?",
    a: "All packages include a professional driver, fuel, and parking fees. Executive packages also include complimentary refreshments, bottled water, and in-car Wi-Fi.",
  },
  {
    q: "Can I customise my tour route?",
    a: "Absolutely! Every tour can be tailored to your preferences. Just mention your must-see spots when booking and we'll create a personalised itinerary around your schedule.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand plans change. Cancellations made 24 hours or more before the tour receive a full refund. We're always happy to reschedule at no extra charge.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes! We offer convenient airport pickup and drop-off services across Malta. Contact us with your flight details for a tailored quote.",
  },
  {
    q: "How many people can travel per vehicle?",
    a: "Our standard vehicles comfortably seat up to 4 passengers. For larger groups of up to 8, we have premium MPV options available — just mention your group size when booking.",
  },
];

export default function Home() {
  const { data: tours, isLoading: isLoadingTours } = useTours();
  const { data: places, isLoading: isLoadingPlaces } = usePlaces();
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quick booking form state
  const [pickup, setPickup] = useState('');
  const [tourType, setTourType] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleQuickBook = () => {
    const message = `Hello! I'd like to book a tour with MaltaTours.\n\n📍 Pickup: ${pickup || 'To be confirmed'}\n🗺️ Tour Type: ${tourType || 'To be discussed'}\n📅 Date: ${date || 'Flexible'}\n👥 Passengers: ${passengers}\n\nPlease confirm availability and pricing. Thank you!`;
    window.open(`https://wa.me/35699468450?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-28 pb-12"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold">Rated 5.0 by 500+ Travellers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg">
              Malta's Premier<br />
              <span className="text-secondary italic">Private Tour Service</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discover the hidden gems of the Mediterranean with our luxury private taxi tours.
              Professional drivers, premium vehicles, unforgettable experiences.
            </p>
          </motion.div>

          {/* Quick Booking Widget */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 max-w-3xl mx-auto mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-white/70 font-semibold uppercase tracking-wide pl-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Valletta Hotel"
                  value={pickup}
                  onChange={e => setPickup(e.target.value)}
                  className="w-full bg-white/90 text-primary placeholder:text-muted-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="booking-tour" className="text-xs text-white/70 font-semibold uppercase tracking-wide pl-1">
                  Tour Type
                </label>
                <select
                  id="booking-tour"
                  title="Tour Type"
                  value={tourType}
                  onChange={e => setTourType(e.target.value)}
                  className="w-full bg-white/90 text-primary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Select a tour...</option>
                  <option>Basic Island Tour</option>
                  <option>Premium Historical Tour</option>
                  <option>Executive Full-Day Tour</option>
                  <option>Airport Transfer</option>
                  <option>Custom Tour</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="booking-date" className="text-xs text-white/70 font-semibold uppercase tracking-wide pl-1">
                  Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  title="Tour Date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full bg-white/90 text-primary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="booking-passengers" className="text-xs text-white/70 font-semibold uppercase tracking-wide pl-1">
                  Passengers
                </label>
                <select
                  id="booking-passengers"
                  title="Number of Passengers"
                  value={passengers}
                  onChange={e => setPassengers(e.target.value)}
                  className="w-full bg-white/90 text-primary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#22bf5c] text-white font-bold rounded-xl text-base shadow-lg shadow-[#25D366]/30 transition-all duration-200"
              onClick={handleQuickBook}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Instant Quote via WhatsApp
            </Button>
          </motion.div>

          <p className="text-white/50 text-xs">No credit card needed · Reply within minutes · Free cancellation</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md border border-primary/5 text-center"
              >
                <stat.icon className="w-6 h-6 text-secondary mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Tailored For You</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Choose Your Journey</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Whether you need a quick airport transfer or a full-day historical immersion, we have the perfect package for every traveller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingTours ? (
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">How It Works</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Booking your Malta tour is quick, easy, and completely hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px border-t-2 border-dashed border-secondary/40" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              size="lg"
              className="rounded-full px-8 bg-[#25D366] hover:bg-[#22bf5c] text-white shadow-lg shadow-[#25D366]/20"
              onClick={() => window.open('https://wa.me/35699468450', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Booking Now
            </Button>
          </div>
        </div>
      </section>

      {/* EXECUTIVE SHOWCASE */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
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
                  Travel in Absolute<br />
                  <span className="text-secondary">Luxury</span>
                </h2>
              </div>

              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Upgrade to our Executive tier for the ultimate Maltese experience.
                Featuring premium Mercedes vehicles, complimentary refreshments, and priority booking flexibility.
                Perfect for business travel or special occasions.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Premium Mercedes Fleet",
                  "Professional Chauffeur",
                  "Complimentary Wi-Fi",
                  "Bottled Water Included",
                  "Priority Booking",
                  "Flexible Itinerary",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 shadow-lg" asChild>
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
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-display font-bold text-xl">Top Rated</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs mt-1 font-semibold opacity-80">500+ Reviews</p>
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
            <Button variant="outline" className="hidden md:flex" asChild>
              <a href="https://wa.me/35699468450" target="_blank" rel="noopener noreferrer">Enquire About Sites</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingPlaces ? (
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
            <Button variant="outline" className="w-full" asChild>
              <a href="https://wa.me/35699468450" target="_blank" rel="noopener noreferrer">Enquire About Sites</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">What Our Clients Say</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Real Reviews</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Don't just take our word for it — hear from the hundreds of happy travellers we've guided across Malta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-primary/5 flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">Frequently Asked</h2>
            <p className="text-muted-foreground mt-4">
              Everything you need to know before booking your Malta tour.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-primary/10 rounded-xl overflow-hidden">
                <button
                  type="button"
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-primary hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-primary/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
            <Button
              className="rounded-full px-8 bg-[#25D366] hover:bg-[#22bf5c] text-white"
              onClick={() => window.open('https://wa.me/35699468450', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-14 shadow-2xl text-center text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to Explore Malta?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto text-lg">
              Book your private tour today and let us take care of every detail while you create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-[#25D366] hover:bg-[#22bf5c] text-white shadow-xl shadow-black/20 px-8 font-bold"
                onClick={() => window.open('https://wa.me/35699468450', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:info@maltatours.com'}
              >
                Email Enquiry
              </Button>
            </div>
            <p className="text-primary-foreground/50 text-xs mt-6">
              Typically reply within 5 minutes · No booking fees · Free cancellation
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
