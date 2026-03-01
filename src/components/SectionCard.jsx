// components/ContentSection.jsx
import { motion } from "framer-motion";

// Reusable SectionCard with luxury style
function SectionCard({ title, content, list, footer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-cream/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl space-y-6 max-w-3xl mx-auto"
    >
      {title && <h2 className="font-serif text-3xl text-soil mb-2">{title}</h2>}
      {content && <p className="text-soil/80 leading-relaxed">{content}</p>}

      {list && (
        <ul className="space-y-2 text-soil/80 pl-5 list-disc list-inside">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {footer && <p className="text-soil/70 mt-2">{footer}</p>}
    </motion.div>
  );
}