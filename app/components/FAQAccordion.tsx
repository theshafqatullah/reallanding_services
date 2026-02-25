"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-green-200 shadow-lg shadow-green-100/50"
                : "border-gray-100 hover:border-green-200"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full text-left cursor-pointer p-6 font-bold text-gray-900"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-green-600" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 -mt-2">
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
