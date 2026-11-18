import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SOLUTION_TABS } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Solutions.css';

export function Solutions() {
  const [activeTabId, setActiveTabId] = useState(SOLUTION_TABS[0].id);
  const [ref, isVisible] = useReveal();

  const activeTab = SOLUTION_TABS.find((t) => t.id === activeTabId) || SOLUTION_TABS[0];

  return (
    <section id="solutions" className="section section--dark solutions-section">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-header">
          <span className="eyebrow">02 / Technical Stack &amp; Solutions</span>
          <h2 className="section-title">
            Pragmatic <span className="serif-accent">modern architecture</span> chosen for
            reliability, not hype.
          </h2>
          <p className="section-subtitle">
            Explore how our engineering disciplines combine proven tools across interface, API,
            cloud infrastructure, and security assurance.
          </p>
        </div>

        <div className="solutions-shell">
          <div className="solutions-tabs" role="tablist" aria-label="Technical disciplines">
            {SOLUTION_TABS.map((tab, index) => {
              const isSelected = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  className={`solutions-tab ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <span className="solutions-tab__idx">0{index + 1}</span>
                  <span className="solutions-tab__label">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
            className="solutions-panel"
          >
            <div className="solutions-panel__main">
              <div className="solutions-panel__head">
                <span className="solutions-panel__eyebrow">{activeTab.eyebrow}</span>
                <div className="solutions-panel__metric">
                  <span className="solutions-panel__metric-label">{activeTab.metric.label}</span>
                  <span className="solutions-panel__metric-val">{activeTab.metric.value}</span>
                </div>
              </div>

              <h3 className="solutions-panel__title">{activeTab.headline}</h3>
              <p className="solutions-panel__summary">{activeTab.summary}</p>

              <ul className="solutions-panel__list">
                {activeTab.highlights.map((item) => (
                  <li key={item} className="solutions-panel__item">
                    <span className="solutions-panel__check" aria-hidden="true">
                      <Check size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="solutions-panel__side">
              <div className="solutions-stack-box">
                <span className="solutions-stack-box__title">Core Technologies</span>
                <div className="solutions-stack-pills">
                  {activeTab.stack.map((tech) => (
                    <span key={tech} className="solutions-stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="solutions-cta-box">
                <p>Need guidance choosing the right architecture for your roadmap?</p>
                <a href="#contact" className="btn btn--outline-dark btn--sm">
                  <span>Request a Technical Review</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

