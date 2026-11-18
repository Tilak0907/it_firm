import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { BUSINESS } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'Custom Software Engineering',
  message: '',
};

const SERVICE_OPTIONS = [
  'Custom Software Engineering',
  'Web & Mobile Product Development',
  'Cloud Architecture & DevOps',
  'API Systems & Integrations',
  'Legacy Modernization',
  'Technical Advisory & Maintenance',
];

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState('');
  const [ref, isVisible] = useReveal();

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      next.message = 'Please share a brief overview of your project (at least 15 characters).';
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${form.service} — ${form.company || form.name}`
    );
    const body = encodeURIComponent(
      `Hello ${BUSINESS.ownerName},\n\n` +
        `Name: ${form.name}\n` +
        `Company: ${form.company || 'N/A'}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone || 'N/A'}\n` +
        `Service of Interest: ${form.service}\n\n` +
        `Project Brief:\n${form.message}\n`
    );
    return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-header">
          <span className="eyebrow">07 / Contact Us</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="serif-accent">dependable</span> together.
          </h2>
          <p className="section-subtitle">
            Reach out directly to discuss a new build, modernization initiative, or technical
            consultation with {BUSINESS.ownerName}.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Business Information Card */}
          <div className="contact-info">
            <div className="contact-info__top">
              <span className="contact-info__eyebrow">Direct Business Channels</span>
              <h3 className="contact-info__company">{BUSINESS.brandDisplay}</h3>
              <p className="contact-info__sub">
                {BUSINESS.operatingName} &middot; {BUSINESS.tagline}
              </p>
            </div>

            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <User size={18} />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Owner &amp; Principal</span>
                  <span className="contact-item__value">{BUSINESS.ownerName}</span>
                </div>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Phone</span>
                  <a href={BUSINESS.phoneHref} className="contact-item__link">
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(BUSINESS.phoneDisplay, 'phone')}
                  aria-label="Copy phone number"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Email</span>
                  <a href={BUSINESS.emailHref} className="contact-item__link">
                    {BUSINESS.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(BUSINESS.email, 'email')}
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </li>

              <li className="contact-item">
                <span className="contact-item__icon" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">Office Address</span>
                  <address className="contact-item__address">
                    {BUSINESS.addressLine1}
                    <br />
                    {BUSINESS.addressLine2}, {BUSINESS.country}
                  </address>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(BUSINESS.fullAddress, 'address')}
                  aria-label="Copy office address"
                  title="Copy office address"
                >
                  {copiedField === 'address' ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </li>
            </ul>

            <div className="contact-info__footer">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark btn--sm"
              >
                <span>View Location on Map</span>
                <ExternalLink size={14} />
              </a>
              <span className="contact-info__response">
                {copiedField ? `Copied ${copiedField} to clipboard.` : 'Typical response: within 1 business day'}
              </span>
            </div>
          </div>

          {/* Interactive Frontend Consultation Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success" role="status" aria-live="polite">
                <span className="contact-success__icon" aria-hidden="true">
                  <CheckCircle2 size={32} />
                </span>
                <h3>Project Brief Prepared</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>. Your inquiry for{' '}
                  <strong>{form.service}</strong> is ready to send directly to{' '}
                  <strong>{BUSINESS.ownerName}</strong> ({BUSINESS.email}).
                </p>
                <div className="contact-success__actions">
                  <a href={buildMailtoLink()} className="btn btn--primary">
                    <Mail size={16} />
                    <span>Open in Email App</span>
                  </a>
                  <button type="button" className="btn btn--outline" onClick={resetForm}>
                    Draft Another Inquiry
                  </button>
                </div>
                <p className="contact-success__note">
                  Prefer a direct conversation? Call{' '}
                  <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__head">
                  <h3>Start a Conversation</h3>
                  <p>Share a few details about your goals and timeline.</p>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                    />
                    {errors.name && (
                      <span id="err-name" className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-company">Company / Organization</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Logistics Inc."
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Business Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.ca"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                    />
                    {errors.email && (
                      <span id="err-email" className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="416-555-0199"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-service">Primary Area of Interest</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Project Overview <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about what you are building, modernizing, or trying to solve..."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                  {errors.message && (
                    <span id="err-message" className="form-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="contact-form__submit">
                  <button type="submit" className="btn btn--primary btn--lg">
                    <span>Prepare Consultation Inquiry</span>
                    <Send size={16} />
                  </button>
                  <span className="contact-form__privacy">
                    Direct inquiry to {BUSINESS.operatingName} · No spam, ever.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

