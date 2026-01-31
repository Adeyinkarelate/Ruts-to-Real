import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBg from "../assets/images/use.jpg"; // replace with your image
import { Link } from "react-router";


export default function ContactSection() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fi6mpzr",
        "template_pzrprlb",
        formRef.current,
        "Aj_Y9df2EeKCedFTl",
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      {/* INTRO SECTION */}
      <section
        className="
              relative w-full
              py-24 md:py-32
              
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
                  text-3xl sm:text-4xl md:text-5xl
                  tracking-tight
                  max-w-3xl
                  text-cream
                "
          >
            A Safe Space to Ask, Share, and Begin
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
            Ruts to Real provides a thoughtful point of contact for individuals and families exploring clarity, support, and empowered next steps in life and relationships.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-white  text-soil py-10">
        {/* Background */}
        {/* <div className="absolute inset-0">
          <img
            src={co}
            alt="Calm reflective space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-soil/70" />
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
              You Have Questions.
              <br />
              We’re Here to Listen.
            </h1>

            <p className="mt-6 max-w-md mx-auto md:mx-0 text-soil/70 leading-relaxed">
              Whether you’re exploring coaching, navigating a life transition,
              or seeking clarity before committing — you’re welcome to reach
              out. Thoughtful conversations start here.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:hello@rutstoreal.com"
                  className="underline underline-offset-4"
                >
                  hello@rutstoreal.com
                </a>
              </p>

              <p>
                <span className="font-medium">WhatsApp (Canada):</span>{" "}
                <a
                  href="https://wa.me/1XXXXXXXXXX"
                  className="underline underline-offset-4"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </p>
              <p className="text-xs text-soil/60 mt-4">
                Coaching services are not a substitute for therapy, medical, or
                legal advice.
                <Link to="/disclaimer" className="underline ml-1">
                  Learn more
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h2 className="font-serif text-2xl mb-6">Tell Us What You Need</h2>

            {success && (
              <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                Your message has been sent successfully. We’ll respond soon.
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  required
                  className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
                />
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                  className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
              />

              <select
                name="inquiry"
                required
                className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
              >
                <option value="">Type of inquiry</option>
                <option>Individual Coaching</option>
                <option>Relationship / Marriage</option>
                <option>Parenting Across Cultures</option>
                <option>General Question</option>
              </select>

              <textarea
                name="message"
                placeholder="Your message"
                required
                className="
                input
                w-full
                min-h-50 md:min-h-45
                rounded-lg
                border border-soil/20
                px-4 py-3
                text-sm
                bg-white text-black
                focus:outline-none
                focus:ring-2 focus:ring-sage/40
                resize-y
              "
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 rounded-full bg-sage text-soil py-3 text-sm tracking-wide hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-md text-soil/60 text-center mt-3">
                Your message is treated with care and confidentiality.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
