import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Process.css';

export function Process() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="process" className="section">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-header">
          <span className="eyebrow">03 / Delivery Process</span>
          <h2 className="section-title">
            A disciplined <span className="serif-accent">four-stage workflow</span> with zero
            black boxes.
          </h2>
          <p className="section-subtitle">
            Every engagement follows clear milestones, regular live previews, and documented
            handovers so you stay in control from kickoff to production.
          </p>
        </div>

        <ol className="process-grid">
          {PROCESS_STEPS.map((item) => (
            <li key={item.step} className="process-card">
              <div className="process-card__head">
                <span className="process-card__step">{item.step}</span>
                <span className="process-card__duration">{item.duration}</span>
              </div>

              <h3 className="process-card__title">{item.title}</h3>
              <p className="process-card__desc">{item.description}</p>

              <ul className="process-card__outputs">
                {item.outputs.map((output) => (
                  <li key={output}>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

