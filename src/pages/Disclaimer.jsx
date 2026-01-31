import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CoachingDisclaimer() {
  return (
    <>
      <Navbar />

      {/* HERO / INTRO */}
      <section className="bg-soil text-cream py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl tracking-tight"
          >
            Coaching Disclaimer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Clarifying the scope, intention, and boundaries of coaching services
            provided by Ruts to Real.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white text-soil py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              Nature of Coaching
            </h2>
            <p className="text-soil/75 leading-relaxed">
              Coaching at Ruts to Real is a reflective, collaborative process
              designed to support clarity, awareness, personal growth, and
              empowered decision-making. Coaching is future-focused and does
              not involve diagnosing, treating, or resolving mental health
              conditions.
            </p>
          </motion.div>

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              Not Therapy or Medical Care
            </h2>
            <p className="text-soil/75 leading-relaxed">
              Coaching services provided by Ruts to Real are not psychotherapy,
              counseling, medical treatment, or mental health services. Coaching
              does not replace care from licensed mental health professionals,
              physicians, or healthcare providers.
            </p>

            <p className="mt-4 text-soil/75 leading-relaxed">
              If you are experiencing significant emotional distress, mental
              health challenges, or psychological concerns, we encourage you
              to seek support from a qualified professional.
            </p>
          </motion.div>

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              Client Responsibility
            </h2>
            <p className="text-soil/75 leading-relaxed">
              Coaching is a partnership. Clients remain fully responsible for
              their choices, actions, and outcomes. Ruts to Real does not
              guarantee specific results, as outcomes depend on individual
              circumstances, effort, and commitment.
            </p>
          </motion.div>

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              Confidentiality
            </h2>
            <p className="text-soil/75 leading-relaxed">
              Information shared during coaching sessions or through forms is
              treated with care and discretion. Confidentiality may be limited
              in cases where disclosure is required by law or where there is
              risk of harm to yourself or others.
            </p>
          </motion.div>

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              No Legal, Medical, or Financial Advice
            </h2>
            <p className="text-soil/75 leading-relaxed">
              Coaching does not provide legal, medical, or financial advice.
              Any discussions in these areas are for reflection and awareness
              only and should not replace professional guidance.
            </p>
          </motion.div>

          {/* SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl mb-4">
              Acceptance of This Disclaimer
            </h2>
            <p className="text-soil/75 leading-relaxed">
              By engaging with Ruts to Real services, submitting forms, or
              participating in coaching sessions, you acknowledge that you
              have read, understood, and agreed to this Coaching Disclaimer.
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-soil/10"
          >
            <p className="text-sm text-soil/60">
              Questions about this disclaimer? Contact us at{" "}
              <a
                href="mailto:hello@rutstoreal.com"
                className="underline underline-offset-4"
              >
                hello@rutstoreal.com
              </a>
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
