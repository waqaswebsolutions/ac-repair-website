import { FaPlus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you offer emergency service?',
    answer: 'Yes, 24/7 emergency HVAC repair is available.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'All our technicians are licensed and insured.',
  },
  {
    question: 'How much does a repair cost?',
    answer: 'We provide upfront pricing after inspection.',
  },
  {
    question: 'Do you offer maintenance plans?',
    answer: 'Yes, ask about our annual maintenance program.',
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-12">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl p-6 border border-primary/5 shadow-sm hover:shadow-soft transition-all hover:-translate-y-1 cursor-default"
            >
              <h4 className="font-bold text-primary flex justify-between items-center">
                {faq.question}
                <FaPlus className="text-accent-cool text-sm" />
              </h4>
              <p className="text-text-soft text-sm mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}