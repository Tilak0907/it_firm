import { useEffect, useState } from 'react';
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/businessData';
import './Navbar.css';

export function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#top" className="navbar__brand" onClick={handleLinkClick} aria-label={`${BUSINESS.brandDisplay} Home`}>
            <span className="navbar__mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 19V5L13 15V5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18.5" cy="6.5" r="2.5" fill="#C76238" />
                <path d="M18.5 12V19" stroke="#89C4B8" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="navbar__brand-text">
              <span className="navbar__brand-name">{BUSINESS.brandName}</span>
              <span className="navbar__brand-sub">{BUSINESS.brandSub}</span>
            </span>
          </a>

          <nav className="navbar__nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar__link ${activeSection === link.id ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={BUSINESS.phoneHref} className="navbar__phone" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
              <Phone size={15} />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <a href="#contact" className="btn btn--primary btn--sm">
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay & Drawer (outside <header> so backdrop-filter never clips fixed positioning) */}
      <div
        className={`mobile-drawer-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-nav-drawer"
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer__head">
          <span className="mobile-drawer__eyebrow">{BUSINESS.brandName}</span>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-drawer__links">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-drawer__link ${activeSection === link.id ? 'is-active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="mobile-drawer__index">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="mobile-drawer__arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <a href="#contact" className="btn btn--primary mobile-drawer__cta" onClick={handleLinkClick}>
            <span>Schedule a Consultation</span>
            <ArrowUpRight size={16} />
          </a>

          <div className="mobile-drawer__contact">
            <a href={BUSINESS.phoneHref} className="mobile-drawer__meta-link">
              <Phone size={15} />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <a href={BUSINESS.emailHref} className="mobile-drawer__meta-link">
              <Mail size={15} />
              <span>{BUSINESS.email}</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

