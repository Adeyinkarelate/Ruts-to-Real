// components/ContentSection.jsx
import { motion } from "framer-motion";

// Reusable SectionCard with luxury style
function SectionCard({ title, content, list, footer }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 space-y-4"
    >
      {/* Title */}
      {title && (
        <h1 className="font-serif text-3xl md:text-4xl text-soil tracking-tight">
          {title}
        </h1>
      )}

      {/* Content Paragraph */}
      {content && (
        <p className="text-soil/80 text-md md:text-lg leading-relaxed">
          {content}
        </p>
      )}

      {/* List */}
      {list && (
        <ul className="list-disc list-inside pl-5 space-y-2 text-soil/80 text-md md:text-md">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Footer / Note */}
      {footer && (
        <p className="text-soil/70 italic text-md md:text-lg mt-4">{footer}</p>
      )}
    </motion.section>
  );
}

// Main Content Section
export default function ContentSection() {
  const sections = [
    {
      title: "What Is a Clarity Session?",
      content:
        "The Clarity Session is a 60–90 minute one-on-one coaching conversation that offers space to reflect, explore what’s coming up for you, and gain direction.",
      list: [
        "Identify emotional, relational, or life patterns that may be keeping you stuck",
        "Explore current challenges with curiosity and compassion",
        "Clarify what you need most in this season",
        "Discuss grounded, aligned next steps forward",
      ],
      footer:
        "You’ll leave the session with greater clarity, insight, and a sense of direction — whether or not you choose to continue with coaching.",
    },
    {
      title: "Who This Session Is For",
      content: "The Clarity Session is a good fit if you are:",
      list: [
        "Feeling emotionally or mentally stuck",
        "Navigating life transitions or identity shifts",
        "Experiencing relationship or family strain",
        "Parenting between cultures and feeling unsure or overwhelmed",
        "Struggling with boundaries, expectations, or role changes",
        "Unsure which coaching service or program is right for you",
      ],
      footer:
        "You do not need to have a clear goal before booking. Clarity often comes through the conversation.",
    },
    {
      title: "What This Session Is Not",
      content: "To support transparency and trust, it’s important to note:",
      list: [
        "This session is coaching, not therapy",
        "It does not involve diagnosing or treating mental health conditions",
        "It is not a crisis or emergency service",
      ],
      footer:
        "If you are experiencing acute distress or require clinical mental health support, therapy with a licensed professional is recommended. Coaching can complement therapy but does not replace it.",
    },
    {
      title: "What Happens After the Session?",
      list: [
        "You may feel complete with the insight gained",
        "Or we may identify a coaching service or program that feels supportive for next steps",
      ],
      footer:
        "There is no obligation to continue beyond this session. If further coaching is recommended, you’ll be given space to decide what feels right for you.",
    },
  ];

  return (
    <section className="py-28 bg-white text-soil">
      <div className="max-w-7xl mx-auto px-6 space-y-24  ">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            content={section.content}
            list={section.list}
            footer={section.footer}
          />
        ))}
      </div>
      {/* Session Details */}
      <section className="py-28 bg-linear-to-b from-white to-cream/40 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-soil text-cream rounded-2xl px-10 py-16 text-center max-w-6xl mx-auto shadow-xl my-4  "
        >
          <h2 className="font-serif text-3xl mb-4 text-white text-center">
            Session Details
          </h2>
          <ul className="text-white text-center space-y-2 text-lg  list-inside list-none">
            <li>Format: 1:1 coaching (virtual)</li>
            <li>Length: 60–90 minutes</li>
            <li>Location: Online (secure video platform)</li>
            <li>Investment: ( I will put the price here )</li>
          </ul>
        </motion.div>
      </section>
    </section>
  );
}
