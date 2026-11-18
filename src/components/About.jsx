import { Building2, Compass, MapPin, UserCheck } from 'lucide-react';
import { BUSINESS, PRINCIPLES } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export function About() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="section">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="about-grid">
          <div className="about-story">
            <span className="eyebrow">05 / About &amp; Leadership</span>
            <h2 className="section-title">
              Ontario-rooted <span className="serif-accent">software craftsmanship</span> with
              direct accountability.
            </h2>

            <p className="about-story__lead">
              <strong>{BUSINESS.brandDisplay}</strong> (operating under{' '}
              <strong>{BUSINESS.operatingName}</strong>) is an independent Canadian IT software
              company headquartered in Scarborough, Ontario. Founded and led by{' '}
              <strong>{BUSINESS.ownerName}</strong>, our practice was built on a straightforward
              premise: businesses deserve senior-grade engineering without agency bloat.
            </p>

            <p className="about-story__body">
              Whether launching a new digital product, integrating fragmented operational systems,
              or modernizing an existing platform, we combine architectural discipline with clear,
              business-first communication across the Greater Toronto Area and beyond.
            </p>

            <div className="principles-list">
              {PRINCIPLES.map((principle, idx) => (
                <div key={principle.title} className="principle-item">
                  <span className="principle-item__num">0{idx + 1}</span>
                  <div>
                    <h3 className="principle-item__title">{principle.title}</h3>
                    <p className="principle-item__desc">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="corporate-card" aria-label="Corporate profile">
            <div className="corporate-card__header">
              <span className="corporate-card__badge">Corporate Profile</span>
              <h3 className="corporate-card__name">{BUSINESS.brandDisplay}</h3>
              <p className="corporate-card__type">
                {BUSINESS.operatingName} &middot; {BUSINESS.businessType}
              </p>
            </div>

            <dl className="corporate-card__facts">
              <div className="corporate-fact">
                <dt>
                  <UserCheck size={16} aria-hidden="true" />
                  <span>Principal / Owner</span>
                </dt>
                <dd>{BUSINESS.ownerName}</dd>
              </div>

              <div className="corporate-fact">
                <dt>
                  <Building2 size={16} aria-hidden="true" />
                  <span>Operating Entity</span>
                </dt>
                <dd>{BUSINESS.operatingName}</dd>
              </div>

              <div className="corporate-fact">
                <dt>
                  <MapPin size={16} aria-hidden="true" />
                  <span>Headquarters</span>
                </dt>
                <dd>
                  {BUSINESS.addressLine1}
                  <br />
                  {BUSINESS.addressLine2}
                  <br />
                  {BUSINESS.country}
                </dd>
              </div>

              <div className="corporate-fact">
                <dt>
                  <Compass size={16} aria-hidden="true" />
                  <span>Service Area</span>
                </dt>
                <dd>Scarborough, Greater Toronto Area, Ontario &amp; Remote North America</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

