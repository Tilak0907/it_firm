import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, X } from 'lucide-react';
import { FEATURED_WORK } from '../data/businessData';
import { useReveal } from '../hooks/useReveal';
import './Work.css';

export function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, isVisible] = useReveal();

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="section section--alt">
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-header section-header--split">
          <div className="section-header__copy">
            <span className="eyebrow">04 / Solution Blueprints</span>
            <h2 className="section-title">
              Representative <span className="serif-accent">software architectures</span> we build
              &amp; modernize.
            </h2>
          </div>
          <p className="section-subtitle work__aside">
            Select any blueprint below to inspect the engineering challenge, system design, and
            business impact.
          </p>
        </div>

        <div className="work-grid">
          {FEATURED_WORK.map((project, index) => (
            <article key={project.id} className="work-card">
              <div className="work-card__banner">
                <span className="work-card__category">{project.category}</span>
                <span className="work-card__index">0{index + 1}</span>
              </div>

              <div className="work-card__body">
                <h3 className="work-card__title">{project.title}</h3>
                <p className="work-card__summary">{project.summary}</p>

                <div className="work-card__impact">
                  <span className="work-card__impact-label">Key Outcome</span>
                  <span className="work-card__impact-value">{project.impact}</span>
                </div>

                <div className="work-card__footer">
                  <div className="work-card__stack">
                    {project.architecture.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="work-card__btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Architecture Blueprint Modal */}
      {selectedProject && (
        <div
          className="work-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="work-modal" onClick={(e) => e.stopPropagation()}>
            <div className="work-modal__header">
              <div>
                <span className="work-modal__eyebrow">{selectedProject.category}</span>
                <h3 id="work-modal-title" className="work-modal__title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="work-modal__close"
                aria-label="Close blueprint details"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="work-modal__content">
              <div className="work-modal__block">
                <h4>Business Challenge</h4>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="work-modal__block">
                <h4>Engineering Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="work-modal__block">
                <h4>Delivered Outcomes</h4>
                <ul className="work-modal__outcomes">
                  {selectedProject.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="work-modal__stack-bar">
                <span className="work-modal__stack-title">
                  <Layers size={15} />
                  <span>Architecture Stack</span>
                </span>
                <div className="work-modal__pills">
                  {selectedProject.architecture.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="work-modal__footer">
              <span className="work-modal__impact-pill">{selectedProject.impact}</span>
              <a
                href="#contact"
                className="btn btn--primary btn--sm"
                onClick={() => setSelectedProject(null)}
              >
                <span>Build Something Similar</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

