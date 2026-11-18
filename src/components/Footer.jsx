import { Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/businessData';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <span className="footer__mark" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V5L13 15V5" stroke="#F5F3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="18.5" cy="6.5" r="2.5" fill="#C76238" />
                  <path d="M18.5 12V19" stroke="#89C4B8" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
              <span>{BUSINESS.brandName}</span>
            </a>
            <p className="footer__about">
              Operated by <strong>{BUSINESS.operatingName}</strong> and led by {BUSINESS.ownerName},
              delivering custom web applications, cloud architecture, and digital modernization from
              Scarborough, Ontario.
            </p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Navigation</h3>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Direct Contact</h3>
            <ul className="footer__contact">
              <li>
                <Phone size={15} aria-hidden="true" />
                <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={15} aria-hidden="true" />
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
              </li>
              <li>
                <MapPin size={15} aria-hidden="true" />
                <span>{BUSINESS.fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {BUSINESS.operatingName}. All rights reserved.
          </p>
          <p className="footer__owner">
            Principal: {BUSINESS.ownerName} &middot; {BUSINESS.businessType}
          </p>
        </div>
      </div>
    </footer>
  );
}

