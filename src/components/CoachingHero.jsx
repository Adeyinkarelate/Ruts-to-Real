import { Link } from "react-router";
import aboutImage from "../assets/images/ab.jpeg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="relative w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={aboutImage}
              alt="Portrait of Valerie Iniobong"
              className="w-full h-112.5 rounded-xl shadow-card object-cover"
            />

            {/* Quote */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-sage text-soil rounded-3xl px-6 py-4 shadow-soft text-sm font-serif italic leading-relaxed max-w-xs text-center lg:text-left">
              “The surest way to predict the{" "}
              <span className="font-medium text-olive">future</span> is to
              create it{" "}
              <span className="font-medium text-olive">yourself.</span>”
            </div>
          </div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl text-center lg:text-left mt-12 lg:mt-0"
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-soil mb-6">
              Hi, I’m{" "}
              <span className="italic text-olive">Valerie Iniobong</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              I work with individuals, couples, and parents who feel stuck in
              patterns they did not consciously choose — whether in their
              personal lives, relationships, parenting, or evolving sense of
              identity. Many of the people I support are navigating seasons of
              transition, including relocation, cultural shifts, changing family
              roles, generational expectations, or quiet internal unrest that
              can be difficult to name.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              As a trained life coach with a strong background in project
              management and leadership, I bring strategic clarity and
              structured insight to deeply human challenges — helping
              individuals and families transform reflection into intentional,
              sustainable change.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              My approach blends compassion with structure. I create a safe,
              judgment-free space where you can slow down, explore what is
              happening beneath the surface, and reconnect with your values.
              Rather than offering quick fixes, I support you in identifying
              patterns, strengthening boundaries, and making empowered decisions
              that align with who you are becoming. At Ruts to Real, growth is
              not rushed — reflection is honored, and change is approached
              thoughtfully with both emotional awareness and practical
              direction.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-block px-8 py-3 text-sm font-medium border border-olive text-olive rounded-md hover:bg-olive hover:text-cream transition-colors duration-300"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
