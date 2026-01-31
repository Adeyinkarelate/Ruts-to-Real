import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import hero from "../assets/images/hero2.jpg"
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section
      className="relative w-full h-162.5 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(31,41,31,0.35)] backdrop-blur-[1px]" />

      <div
        className="
          relative z-10 max-w-4xl px-6
          text-center lg:text-left
          mx-auto lg:mx-16
          flex flex-col
          items-center lg:items-start
        "
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl md:text-6xl
            font-serif font-medium tracking-tight mb-4
            text-white
          "
        >
          Life, Relationship & Parenting Coaching for {" "}
          <span className="text-shadow-olive inline-block">
            <Typewriter
              options={{
                strings: [ "Clarity", "Boundaries", "Empowered Living"],
                autoStart: true,
                loop: true,
                delay: 55,
              }}
            />
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-xl font-light text-[#e6e6e6] mb-6 max-w-lg"
        >
          Reflect. Empower. Authentic. Liberate.
        </motion.p>

        {/* CTA */}
        <Link
          to="/book-session"
          className="
            px-6 py-3 rounded-md font-medium text-md
            bg-sage text-soil
            shadow-md hover:bg-[#a5b886]
          "
        >
          Book a Clarity Session
        </Link>

        {/* Micro Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="
            mt-6 text-lg text-[#e7eadf]
            leading-relaxed max-w-lg
          "
        >
          A safe, reflective space helping individuals and families move out of emotional ruts and into lives rooted in clarity, connection, and real alignment.
        </motion.p>
      </div>
    </section>
  );
}
