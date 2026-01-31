import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBg from "../assets/images/use.jpg";
import { Link } from "react-router";

export default function Booking() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fi6mpzr",
        "template_k0cfo2x",
        formRef.current,
        "Aj_Y9df2EeKCedFTl",
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Navbar />

      {/* HERO / INTRO */}
      <section
        className="relative w-full py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-soil/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl max-w-3xl text-cream"
          >
            Book a Clarity Session
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl text-cream/85 leading-relaxed"
          >
            A calm starting point to explore what you’re navigating and decide,
            together, on supportive next steps.
          </motion.p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="bg-white text-soil py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* LEFT COPY */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              A Thoughtful Way to Begin
            </h2>

            <p className="mt-6 max-w-md mx-auto md:mx-0 text-soil/70 leading-relaxed">
              Share a little about what you’re seeking support with, along with
              a preferred date and time. You’ll receive a personal response
              within 24–48 hours.
            </p>

            <div className="mt-10 space-y-3 text-sm">
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

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-serif text-2xl mb-6">Request a Session</h3>

            {success && (
              <div className="mb-4 text-sm bg-sage/15 text-soil p-3 rounded-lg">
                Your request has been sent. You’ll hear back shortly.
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  placeholder="First name"
                  required
                  className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
                />
                <input
                  name="last_name"
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
                name="service"
                required
                className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
              >
                <option value="">Type of session</option>
                <option>Clarity Session</option>
                <option>Life & Mindset Coaching</option>
                <option>Marriage & Relationship Coaching</option>
                <option>Parenting Across Cultures</option>
              </select>

              {/* DATE + TIME */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="preferred_date"
                  type="date"
                  required
                  className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
                />

                <input
                  name="preferred_time"
                  type="time"
                  required
                  className="input w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
                />
              </div>

              <textarea
                name="message"
                placeholder="Share a little about what you’re navigating"
                required
                className="input min-h-55 w-full rounded-lg border border-soil/20 px-4 py-3 text-sm
      focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white text-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-sage text-soil py-3 text-sm tracking-wide hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Booking Request"}
              </button>

              <p className="text-lg text-soil/60 text-center mt-3">
                Your message is received with care and confidentiality.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
