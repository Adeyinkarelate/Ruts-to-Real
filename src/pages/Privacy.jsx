import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Clarifying the scope, purpose, and boundaries of the coaching services provided by Ruts to Real while ensuring client privacy and confidentiality.
          </motion.p>
        </div>
      </section>

      <section className="bg-cream text-soil">
        <div className="max-w-4xl mx-auto px-6 py-24">

          <p className="text-sm text-soil/60 mb-12">
            Effective Date: January 2026
          </p>

          <div className="space-y-8 leading-relaxed text-soil/80 text-base">
            <p>
              Ruts to Real respects your privacy and is committed to protecting
              the personal information you share with us when using this
              website.
            </p>

            <section>
              <h2 className="font-serif text-xl mb-2">
                Information We Collect
              </h2>
              <p>
                We collect information you voluntarily provide, including your
                name, email address, inquiry details, and booking preferences.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl mb-2">
                How Your Information Is Used
              </h2>
              <p>
                Your information is used solely to respond to inquiries,
                communicate about services, and schedule sessions when
                requested.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl mb-2">
                Email Communication
              </h2>
              <p>
                Messages submitted through our forms are delivered to our
                business email using EmailJS. Please avoid sharing highly
                sensitive information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl mb-2">
                Data Protection
              </h2>
              <p>
                We take reasonable steps to safeguard your data and only retain
                it as long as necessary for communication purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl mb-2">
                Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal
                information by contacting us at hello@rutstoreal.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl mb-2">
                Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy, please email{" "}
                <a
                  href="mailto:hello@rutstoreal.com"
                  className="underline"
                >
                  hello@rutstoreal.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
