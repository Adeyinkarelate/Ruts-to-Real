import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Please read these terms carefully before engaging with coaching
            services provided by Ruts to Real.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white text-soil py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          {/* Scope */}
          <Section title="Scope of Services">
            Ruts to Real provides personal and professional coaching services,
            including one-on-one sessions, group programs, workshops, and
            digital resources. Coaching is educational and growth-focused and
            does not constitute therapy, medical care, or professional advice.
          </Section>

          {/* Eligibility */}
          <Section title="Eligibility & Use">
            By using our services, you confirm that you are legally able to
            enter into this agreement and will use our services only for lawful
            and personal development purposes.
          </Section>

          {/* Client Responsibility */}
          <Section title="Client Responsibility">
            Coaching is a collaborative partnership. You remain fully
            responsible for your decisions, actions, and results. Outcomes vary
            and no specific results are guaranteed.
          </Section>

          {/* Payments */}
          <Section title="Payments & Fees">
            All sessions or programs must be paid for in advance unless
            otherwise agreed. Prices may change with notice. Payment confirms
            your acceptance of these Terms.
          </Section>

          {/* Cancellation */}
          <Section title="Cancellation & Rescheduling">
            Sessions may be rescheduled with at least 24 hours’ notice. Late
            cancellations or missed sessions may be non-refundable and counted
            as completed sessions.
          </Section>

          {/* Refunds */}
          <Section title="Refund Policy">
            Coaching services already delivered are non-refundable. Package or
            program refunds are considered at our discretion. Digital materials
            are non-refundable once accessed.
          </Section>

          {/* Confidentiality */}
          <Section title="Confidentiality & Privacy">
            Information shared during coaching is treated with care and
            discretion. Personal information is stored securely and not shared
            without consent except where required by law or safety concerns.
          </Section>

          {/* Intellectual Property */}
          <Section title="Intellectual Property">
            All worksheets, resources, recordings, and materials provided by
            Ruts to Real remain our intellectual property. They may not be
            copied, distributed, or resold without written permission.
          </Section>

          {/* Limitation */}
          <Section title="Limitation of Liability">
            Ruts to Real is not liable for any decisions, losses, or outcomes
            resulting from participation in coaching. Clients accept full
            responsibility for their choices and actions.
          </Section>

          {/* Conduct */}
          <Section title="Professional Conduct">
            We maintain a respectful and professional environment. Harassment,
            abuse, or inappropriate behavior may result in immediate termination
            of services without refund.
          </Section>

          {/* Changes */}
          <Section title="Changes to These Terms">
            These Terms may be updated periodically. Continued use of our
            services indicates acceptance of any revised terms.
          </Section>

          {/* Acceptance */}
          <Section title="Acceptance of Terms">
            By booking sessions, making payments, or participating in coaching,
            you acknowledge that you have read, understood, and agreed to these
            Terms & Conditions.
          </Section>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-soil/10"
          >
            <p className="text-sm text-soil/60">
              Questions? Contact us at{" "}
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


/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="font-serif text-2xl mb-4">{title}</h2>
      <p className="text-soil/75 leading-relaxed">{children}</p>
    </motion.div>
  );
}
