import React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with her helped me move out of a difficult emotional rut. I gained clarity and tools to communicate better with my partner.",
    author: "A. M.",
  },
  {
    quote:
      "Her approach was gentle yet very grounding. It made a huge difference in how I navigated parenting between cultures.",
    author: "T. O.",
  },
  {
    quote:
      "I walked in overwhelmed and left with practical boundaries and a renewed sense of direction. Highly recommended.",
    author: "S. K.",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  return (
    <section className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-10"
        >
          Testimonials
        </motion.h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="embla__slide min-w-full flex justify-center"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="max-w-xl text-center px-6 py-10 border border-black/10 rounded-xl bg-white/60 backdrop-blur-sm">
                  <p className="text-[15px] md:text-[17px] font-light text-[#2b2b2b] leading-relaxed mb-4">
                    “{t.quote}”
                  </p>
                  <p className="text-sm text-gray-600 font-medium tracking-wide">
                    — {t.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination (dots) */}
        {embla && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => embla.scrollTo(i)}
                className="w-2.5 h-2.5 rounded-full bg-soil hover:bg-sage transition"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
