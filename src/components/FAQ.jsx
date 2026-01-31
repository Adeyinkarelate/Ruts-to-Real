import { faqs } from "../data/data";

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 ">
      <div className="space-y-5">
        {faqs.map((item, index) => (
          <details
            key={index}
            name="faq-accordion"
            className="
              collapse 
              bg-white
              border border-neutral-200 
              rounded-xl
              transition
              hover:border-green-300
              open:border-green-400
              open:bg-green-50/40
            "
          >
            {/* Question */}
            <summary
              className="
                collapse-title 
                font-semibold 
                text-neutral-800 
                cursor-pointer
                text-base
                md:text-lg
                pr-10
              "
            >
              {item.question}
            </summary>

            {/* Answer */}
            <div
              className="
                collapse-content 
                text-neutral-700 
                leading-7 
                text-sm
                md:text-base 
                font-light
              "
            >
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
