import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

import aboutBg from "../assets/images/use.jpg";
import missionImg from "../assets/images/hero2.jpg";
import visionImg from "../assets/images/serve.jpg";
import about from "../assets/images/ab.jpeg";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-soil">
        {/* HERO */}
        <section
          className="relative py-28 md:py-36 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-soil/65" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-5xl text-cream"
            >
              Where Personal Growth Meets Lived Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-cream/85 leading-relaxed"
            >
              Ruts to Real is a coaching practice dedicated to supporting
              individuals and families as they navigate emotional and relational
              ruts shaped by life transitions, relationships, and cultural
              contexts. Through reflective, compassionate coaching, I help
              clients build clarity, self-awareness, and empowered
              choice—creating lives and relationships that feel grounded,
              aligned, and real across cultures and generations.
            </motion.p>
          </div>
        </section>

        {/* IMAGE + INTRO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.img
              src={about}
              alt="Valerie portrait"
              className="rounded-xl shadow-xl w-full h-[520px] object-cover"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif mb-6">
                A Thoughtful Approach to Growth
              </h2>

              <p className="mb-4 leading-relaxed text-soil/80">
                I support individuals, couples, and families navigating moments
                of transition, emotional complexity, and evolving identity.
                Whether facing relationship challenges, cultural shifts, or
                quiet inner unrest, my work creates space for clarity and
                meaningful change.
              </p>

              <p className="mb-4 leading-relaxed text-soil/80">
                With a professional background in leadership and project
                management, I bring both emotional intelligence and structured
                guidance to deeply human experiences — helping clients move from
                reflection into purposeful action.
              </p>

              <p className="leading-relaxed text-soil/80">
                My philosophy is simple: growth should feel grounded,
                intentional, and sustainable. Together, we explore patterns,
                strengthen boundaries, and reconnect with what truly matters.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Mission and vission */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Our Purpose & Direction
              </h2>
              <p className="text-soil/70 leading-relaxed">
                Guided by clarity, compassion, and intentional growth, our
                mission and vision reflect the heart of the work we do and the
                future we are helping shape.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="group bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={missionImg}
                    alt="Mission"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="absolute top-6 left-6 bg-sage text-cream px-4 py-2 rounded-md text-sm tracking-wide">
                    Mission
                  </span>
                </div>

                <div className="p-8">
                  <p className="text-soil/80 leading-relaxed">
                    Ruts to Real exists to support individuals and families in
                    moving beyond stuck patterns into lives marked by clarity,
                    empowered choices, and intentional living — personally,
                    relationally, and culturally.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="group bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={visionImg}
                    alt="Vision"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="absolute top-6 left-6 bg-sage text-cream px-4 py-2 rounded-md text-sm tracking-wide">
                    Vision
                  </span>
                </div>

                <div className="p-8">
                  <p className="text-soil/80 leading-relaxed">
                    We envision healthier individuals, relationships, and
                    families rising beyond emotional ruts into lives rooted in
                    self-awareness, strong boundaries, and authentic connection
                    across cultures and generations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-xs tracking-[0.25em] uppercase text-soil/50">
                Focus Areas
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-soil">
                A Holistic Approach to Growth
              </h2>

              <p className="text-soil/70 leading-relaxed">
                My work is guided by a holistic lens that considers emotional
                well-being, relationships, culture, and intentional choice —
                supporting meaningful and sustainable transformation.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                ["Emotional Clarity", "Personal & relational insight"],
                ["Cross-Cultural Focus", "Multicultural family support"],
                ["Family Systems", "Boundaries & generational patterns"],
                ["Empowered Choices", "Values-led decisions"],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="
            bg-white rounded-xl p-8
            border border-neutral-200
            hover:border-sage hover:shadow-md
            transition duration-300
            text-center
          "
                >
                  <h4 className="font-serif text-lg mb-2">{title}</h4>
                  <p className="text-sm text-soil/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT I HELP WITH */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-3xl mb-10 text-center">
              What I Help With
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Emotional and mental ruts",
                "Marriage and relationship challenges",
                "Life, identity, and family challenges after relocation",
                "Parenting between cultures",
                "Healthy boundaries in relationships and social systems",
                "Clarity and empowered decision-making",
              ].map((item, i) => (
                <div key={i} className="border rounded-lg p-6 bg-white">
                  <p className="text-soil/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-12">My Coaching Framework</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {["Reflect", "Empower", "Authentic", "Liberate"].map(
                (step, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-soil text-sage flex items-center justify-center font-serif">
                      {i + 1}
                    </div>
                    <h4 className="font-serif">{step}</h4>
                    <p className="text-sm text-soil/70">
                      {step === "Reflect" &&
                        "Build awareness of patterns, beliefs, and inner narratives that keep you stuck.."}
                      {step === "Empower" &&
                        "Strengthen boundaries, self-trust, and your ability to make grounded choices."}
                      {step === "Authentic" &&
                        "Align your actions, relationships, and decisions with your values and identity."}
                      {step === "Liberate" &&
                        "Move forward with clarity, confidence, and a renewed sense of freedom."}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="py-28 bg-linear-to-b from-white to-cream/40">
          <div className="max-w-6xl mx-auto px-6">
            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                My Coaching Philosophy
              </h2>

              <p className="text-soil/80 leading-relaxed">
                Meaningful transformation happens when awareness meets
                intention. We often carry invisible narratives shaped by family
                systems, culture, and lived experience. This work creates space
                to gently explore those patterns and move toward more aligned
                ways of living.
              </p>
            </motion.div>

            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT CARD */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
              >
                <h3 className="font-serif text-2xl">How We Work Together</h3>

                <ul className="space-y-3 text-soil/80">
                  <li>Develop structured awareness of patterns</li>
                  <li>Strengthen boundaries and self-trust</li>
                  <li>Align choices with your values</li>
                  <li>Move forward with clarity and confidence</li>
                </ul>
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
              >
                <h3 className="font-serif text-2xl">Why This Work Matters</h3>

                <p className="text-soil/80 leading-relaxed">
                  Life transitions can reshape how we see ourselves and others.
                  Through reflective coaching, clients move beyond survival mode
                  into intentional, values-led living — creating deeper clarity,
                  stronger relationships, and a more grounded sense of self.
                </p>
              </motion.div>
            </div>

            {/* PREMIUM CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-24"
            >
              <div className="bg-soil text-cream rounded-2xl px-10 py-16 text-center max-w-4xl mx-auto shadow-xl">
                <h3 className="font-serif text-2xl md:text-3xl mb-4">
                  Ready to Move from Ruts to Real?
                </h3>

                <p className="text-cream/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                  If you’re feeling stuck, overwhelmed, or navigating change in
                  your life, relationships, or family, the Clarity Session is a
                  supportive first step. Slow down, gain perspective, and walk
                  away with grounded next steps — no pressure, just a meaningful
                  conversation.
                </p>

                <Link
                  to="/book-session"
                  className="inline-block px-8 py-3 bg-sage text-soil rounded-full font-medium hover:opacity-90 transition"
                >
                  Book a Clarity Session
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
