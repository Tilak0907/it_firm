import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Layers,
  MapPin,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { BUSINESS, HERO_METRICS } from '../data/businessData';
import './Hero.css';

const ARCHITECTURE_NODES = [
  {
    id: 'interface',
    tag: '01 · CLIENT LAYER',
    title: 'Modern React & UI Systems',
    detail: 'Responsive web & mobile products crafted for clarity and speed.',
    status: 'WCAG AA · 98 Perf',
    icon: Layers,
  },
  {
    id: 'services',
    tag: '02 · CORE APIs',
    title: 'Resilient Service Layer',
    detail: 'Structured REST/GraphQL backends, auth, and enterprise integrations.',
    status: 'Typed Schemas · Audit Ready',
    icon: Terminal,
  },
  {
    id: 'cloud',
    tag: '03 · INFRASTRUCTURE',
    title: 'Cloud-Native Delivery',
    detail: 'Automated CI/CD pipelines, monitoring, and zero-downtime releases.',
    status: '99.9% Target Uptime',
    icon: Cpu,
  },
];

export function Hero() {
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_NODES[0].id);
  const currentNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNode) || ARCHITECTURE_NODES[0];

  return (
    <section id="top" className="hero">
      <div className="hero__banner" aria-hidden="true">
        <img
          src="/hero-banner.jpg"
          alt=""
          className="hero__banner-img"
          loading="eager"
          decoding="async"
        />
        <div className="hero__banner-overlay" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge">
            <MapPin size={14} />
            <span>Scarborough, Ontario · IT Software Engineering</span>
          </div>

          <h1 className="hero__title">
            Engineering <span className="serif-accent">resilient software</span> for ambitious
            businesses.
          </h1>

          <p className="hero__description">
            <strong>{BUSINESS.brandDisplay}</strong> (operated by{' '}
            <strong>{BUSINESS.operatingName}</strong>) partners with growing organizations to
            architect, build, and modernize custom web platforms, cloud infrastructure, and
            business-critical software—led directly from Ontario, Canada.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary btn--lg">
              <span>Discuss Your Project</span>
              <ArrowRight size={17} />
            </a>
            <a href="#services" className="btn btn--outline-dark btn--lg">
              <span>Explore Capabilities</span>
            </a>
          </div>

          <dl className="hero__metrics">
            {HERO_METRICS.map((item) => (
              <div key={item.label} className="hero__metric">
                <dt className="hero__metric-label">{item.label}</dt>
                <dd className="hero__metric-value">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Interactive Architectural Systems Card */}
        <div className="hero__visual" aria-label="Software engineering architecture overview">
          <div className="arch-console">
            <div className="arch-console__header">
              <div className="arch-console__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="arch-console__title">SYSTEM ARCHITECTURE · ONTARIO STUDIO</span>
              <span className="arch-console__pill">
                <span className="arch-console__pulse" />
                Active
              </span>
            </div>

            <div className="arch-console__canvas">
              <svg
                className="arch-console__grid-svg"
                viewBox="0 0 420 120"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="copperLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#89C4B8" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#C76238" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#89C4B8" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <path
                  d="M28 84 L126 36 L224 72 L322 28 L392 54"
                  stroke="url(#copperLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="28" cy="84" r="4.5" fill="#89C4B8" />
                <circle cx="126" cy="36" r="5" fill="#C76238" />
                <circle cx="224" cy="72" r="4.5" fill="#89C4B8" />
                <circle cx="322" cy="28" r="5.5" fill="#C76238" />
                <circle cx="392" cy="54" r="4.5" fill="#F5F3EE" />
                <path
                  d="M28 104 H392"
                  stroke="rgba(245,243,238,0.1)"
                  strokeDasharray="4 6"
                  strokeWidth="1"
                />
              </svg>

              <div className="arch-console__layers" role="tablist" aria-label="Architecture layers">
                {ARCHITECTURE_NODES.map((node) => {
                  const Icon = node.icon;
                  const active = node.id === selectedNode;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      className={`arch-node ${active ? 'is-active' : ''}`}
                      onClick={() => setSelectedNode(node.id)}
                    >
                      <span className="arch-node__icon">
                        <Icon size={17} />
                      </span>
                      <span className="arch-node__meta">
                        <span className="arch-node__tag">{node.tag}</span>
                        <span className="arch-node__title">{node.title}</span>
                      </span>
                      <CheckCircle2 size={16} className="arch-node__check" />
                    </button>
                  );
                })}
              </div>

              <div className="arch-console__detail" role="tabpanel">
                <div className="arch-console__detail-top">
                  <span className="arch-console__detail-badge">{currentNode.status}</span>
                  <span className="arch-console__detail-loc">
                    <Globe2 size={13} />
                    <span>Toronto / GTA</span>
                  </span>
                </div>
                <p className="arch-console__detail-text">{currentNode.detail}</p>
              </div>
            </div>

            <div className="arch-console__footer">
              <div className="arch-console__trust">
                <ShieldCheck size={16} />
                <span>Led by {BUSINESS.ownerName} · Canadian Corporation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

