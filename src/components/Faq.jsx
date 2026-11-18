import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Faq.css';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, isVisible] = useReveal();

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="section section--alt">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">06 / Frequently Asked</span>
            <h2 className="section-title">
              Clear answers before <span className="serif-accent">we begin.</span>
            </h2>
            <p className="section-subtitle">
              Straightforward details about how we work, intellectual property, and getting a
              software project underway.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={18} className="faq-chevron" aria-hidden="true" />
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="faq-panel"
                  >
                    <div className="faq-panel__inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

