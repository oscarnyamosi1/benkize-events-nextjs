"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CAROUSEL_IMAGES = [
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538218/IMG-20260615-WA0088_wgocmu.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538216/IMG-20260615-WA0067_lvqnuv.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538214/IMG-20260615-WA0077_qq0vug.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538214/IMG-20260615-WA0076_oapcuf.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538206/IMG-20260615-WA0065_yv0sht.jpg",
  "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538206/IMG-20260615-WA0060_osr7tp.jpg"
];


export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Images – crisp and clear */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={CAROUSEL_IMAGES[currentImageIndex]}
              alt="Luxury African Catering"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
              loadin
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal overlays – keep image visible, text readable */}
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
      </div>

      {/* Decorative blurs (subtle) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 9 }}
        className="absolute right-20 top-24 h-72 w-72 rounded-full bg-primary/15 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-[150px]"
      />

      {/* Centered Content */}
      <div className="container relative z-20 mx-auto px-6 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
                

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-foreground font-light leading-[0.9]
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Exceptional
            <br />
            <span className="italic text-primary">African</span>
            <br />
            Catering
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-8 max-w-2xl mx-auto text-foreground/80 text-lg leading-8"
          >
            Bringing authentic African flavours to weddings, corporate
            gatherings and unforgettable celebrations with elegant presentation,
            premium service and culinary excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl h-14 px-8 text-base shadow-2xl"
            >
              <Link href="/booking">
                Book Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl h-14 px-8 bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"
            >
              <Link href="/menu">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Explore Menu
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-16 grid grid-cols-3 gap-10 max-w-xl mx-auto"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground">500+</h2>
              <p className="text-foreground/60 mt-2">Events Catered</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground">10+</h2>
              <p className="text-foreground/60 mt-2">Years Experience</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground">100%</h2>
              <p className="text-foreground/60 mt-2">Fresh Ingredients</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentImageIndex
                ? "w-10 h-2 bg-primary"
                : "w-2 h-2 bg-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center text-foreground/50"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-3">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}