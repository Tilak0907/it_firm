import {
  Cloud,
  Code2,
  Layers,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { SERVICES } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const ICON_MAP = {
  Code2,
  Layers,
  Cloud,
  Workflow,
  RefreshCw,
  ShieldCheck,
};

export function Services() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="services" className="section section--alt">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-header section-header--split">
          <div className="section-header__copy">
            <span className="eyebrow">01 / Services</span>
            <h2 className="section-title">
              Full-cycle software <span className="serif-accent">capabilities</span> tailored to
              real business outcomes.
            </h2>
          </div>
          <p className="section-subtitle services__aside">
            From greenfield software builds to modernizing mission-critical platforms, every
            engagement prioritizes clean engineering and measurable ROI.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            return (
              <article key={service.number} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__icon" aria-hidden="true">
                    <Icon size={21} />
                  </span>
                  <span className="service-card__num">{service.number}</span>
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <ul className="service-card__tags" aria-label={`${service.title} deliverables`}>
                  {service.deliverables.map((tag) => (
                    <li key={tag} className="service-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

