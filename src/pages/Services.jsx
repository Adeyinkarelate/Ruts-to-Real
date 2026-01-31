import { motion } from "framer-motion";
import { Link } from "react-router";
import { services } from "../data/data.js";
import ServiceHero from "../components/ServiceHero";
import Navbar from "../components/Navbar";
import lo from "../assets/images/serve.jpg";
import Footer from "../components/Footer";
import FAQ from "../components/Faq.jsx";

export default function Services() {
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white">
      <Navbar />
      <ServiceHero />
      <section className="w-full  py-10">
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
            {services.map((service, i) => (
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
      {/* intesive */}
      {/* <section className="w-full bg-soil   py-10">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-serif text-olive mb-12"
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          Services for You
        </motion.h2>
        <div className="flex w-full flex-col lg:flex-row px-10"></div>
      </section> */}

      {/*  */}
      <section className="w-full py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={lo}
              alt="Coaching growth imagery"
              className="w-full h-full object-cover brightness-[0.88]"
            />

            {/* Badge */}
            <div className="absolute top-5 left-5 px-4 py-2 rounded-md bg-[#9daa88] text-cream font-medium text-sm shadow-sm">
              New Program
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-soil">
              Rooted in Real (Premium)
            </h3>

            <p className="text-base text-soil/80 leading-relaxed max-w-md">
              A deep, reflective coaching journey designed to help you uncover
              the patterns, stories and emotional habits holding you back — and
              build a grounded, authentic way of relating to yourself and
              others.
            </p>

            <Link to="/book-session" className="px-5 py-2 rounded-md bg-[#9daa88] text-soil text-sm font-medium shadow-sm hover:bg-[#8ea178] transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      {/*  */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-serif text-olive my-4"
        variants={fadeSlide}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        FAQ
      </motion.h2>
      
      {/*  */}
      <FAQ />

      <Footer />
    </div>
  );
}
