import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import aboutBg from "../assets/images/use.jpg"; // replace with your image
import lo from "../assets/images/hero2.jpg";
import co from "../assets/images/serve.jpg";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-soil ">
        {/* INTRO SECTION */}
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
            text-3xl sm:text-4xl md:text-5xl
            tracking-tight
            max-w-3xl
            text-cream
          "
            >
              Where Personal Growth Meets Cultural Understanding
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
              Ruts to Real is a coaching practice dedicated to helping
              individuals and families move beyond emotional and relational ruts
              into lives grounded in clarity, self-awareness, and empowered
              choice — across cultures and generations.
            </motion.p>
          </div>
        </section>
        {/* MISSION AND VISSION*/}

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
                Mission
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-soil">
                MISSION
              </h3>

              <p className="text-base text-soil/80 leading-relaxed max-w-md">
                Ruts to Real exists to help individuals and families move out of
                stuck patterns and into clarity, empowered choices, and aligned
                living — personally, relationally, and culturally.
              </p>
            </div>
          </div>
        </section>
        {/* vission */}
        <section className="w-full py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center px-6">
            {/* Content */}
            <div className="space-y-4 md:space-y-6 w-full">
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-soil">
                VISION
              </h3>

              <p className="text-base text-soil/80 leading-relaxed max-w-md">
                I envision healthier individuals, relationships, and families
                rising beyond emotional ruts into lives rooted in
                self-awareness, strong boundaries, and authentic connection
                across cultures and generations.
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={co}
                alt="Coaching growth imagery"
                className="w-full h-full object-cover brightness-[0.88]"
              />

              {/* Badge */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-md bg-[#9daa88] text-cream font-medium text-sm shadow-sm">
                Vision
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT / FOCUS METRICS */}
        <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Emotional Clarity", "Personal & relational insight"],
            ["Cross-Cultural Focus", "Immigrant & multicultural families"],
            ["Family Systems", "Boundaries & generational patterns"],
            ["Empowered Choices", "Values-led decision making"],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="border border-neutral-200 hover:border-sage rounded-lg p-6 shadow-md"
            >
              <h4 className="font-serif text-lg mb-2">{title}</h4>
              <p className="text-sm text-soil">{desc}</p>
            </div>
          ))}
        </section>

        {/* WHAT I HELP WITH */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="font-serif text-3xl mb-10">What I Help With</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Emotional and mental ruts",
              "Marriage and relationship challenges after relocation",
              "Parenting between cultures",
              "Boundary-setting within family systems",
              "Clarity and empowered decision-making",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-neutral-200 hover:border-sage"
              >
                <p className="text-soil/80">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FRAMEWORK */}
        <h2 className="font-serif text-3xl mb-12 text-soil text-start max-w-7xl mx-auto px-6">
          My Coaching Framework
        </h2>
        <section className="bg-cream py-24 max-w-7xl mx-auto px-6  ">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Reflect", "Empower", "Authentic", "Liberate"].map(
                (step, i) => (
                  <div key={i} className="space-y-2 ">
                    <div className="w-12 h-12 mx-auto rounded-full bg-soil text-sage flex items-center justify-center font-serif text-lg animate-pulse">
                      {i + 1}
                    </div>
                    <h4 className="font-serif text-lg font-semibold">{step}</h4>
                    <p className="text-sm text-soil ">
                      {step === "Reflect" &&
                        "Build awareness of patterns and inner narratives."}
                      {step === "Empower" &&
                        "Strengthen boundaries and self-trust."}
                      {step === "Authentic" &&
                        "Align actions with values and identity."}
                      {step === "Liberate" &&
                        "Move forward with clarity and confidence."}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h3 className="font-serif text-2xl mb-4">
            Ready to Move from Ruts to Real?
          </h3>
          <p className="text-soil/70 mb-6 max-w-xl mx-auto">
            If you’re navigating change, transition, or emotional stuckness, I
            invite you to begin with a clarity session.
          </p>

          <Link to="/book-session" className="px-6 py-3 rounded-md bg-[#a5b58f] text-soil font-medium shadow-sm hover:bg-[#92a47c]">
            Book a Clarity Session
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
