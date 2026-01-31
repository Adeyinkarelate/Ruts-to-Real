import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import aboutBg from "../assets/images/use.jpg";

const ServiceHero = () => {
  return (
    <section
      className="
            relative w-full
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
          Ruts to Real offers coaching support for individuals and families
          navigating emotional and relational challenges, helping them move
          toward clarity, self-awareness, and empowered decision-making across
          cultures and generations.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
