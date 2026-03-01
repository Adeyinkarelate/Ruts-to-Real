import React from "react";
import Hero from "../components/Hero";
import CoachingHero from "../components/CoachingHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServiceHero from "../components/ServiceHero";
import { intensives } from "../data/data.js";
import { Link } from "react-router";
import { motion } from "framer-motion";
import aboutBg from "../assets/images/use.jpg";

const Home = () => {
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#faf9f7]">
      {/* ===========The Hero========== */}
      <Navbar />
      <Hero />
      <CoachingHero />
      <section className="w-full bg-white  py-30">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-serif text-olive mb-12"
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            Services for You
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {intensives.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeSlide}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="
                rounded-[20px] border border-gray-300
                px-6 py-8 bg-white
                flex flex-col justify-between
                shadow-sm hover:shadow-card transition-all
              "
              >
                <div>
                  <h3 className="text-2xl font-serif text-soil mb-1">
                    {service.titleSerif}
                  </h3>
                  <h4 className="text-xl font-serif italic text-soil mb-4">
                    {service.titleSans}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Price + CTA */}
                <Link
                  to="/book-session"
                  className="
                    w-1/3 text-center py-2 text-sm
                    border border-olive text-olive 
                    hover:bg-olive hover:text-cream transition-all
                  "
                >
                  Book Session
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* service hero  */}
      <section
        className="
                  relative max-w-7xl mx-auto px-6 
                  py-24 md:py-32
                  mb-20
                  bg-cover bg-center
                "
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-soil/65" />

        {/* Content */}
        <div
          className="
                    relative z-10
                    max-w-7xl mx-auto px-6
                    flex flex-col
                    items-center md:items-start
                    text-center md:text-left
                  "
        >
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
                      font-serif
                      text-3xl sm:text-4xl md:text-6xl
                      tracking-tight
                      max-w-3xl
                      text-cream
                    "
          >
            Support That Meets You Where You Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
                      mt-4
                      max-w-2xl
                      text-cream/85
                      leading-relaxed
                    "
          >
            At Ruts to Real, personal growth is approached with both compassion
            and structure — because lasting change requires reflection and
            disciplined follow-through.
          </motion.p>
        </div>
      </section>
      {/* Testimony */}
      <TestimonialCarousel />

      <Footer />
    </div>
  );
};

export default Home;
