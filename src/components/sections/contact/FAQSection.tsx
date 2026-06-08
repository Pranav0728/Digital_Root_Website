'use client';

import { useMemo } from 'react';

import { useAccordion } from '@/hooks/useAccordion';

import './FAQSection.scss';

const faqItems = [
  {
    id: 'website-cost',
    title: 'How much does a website cost?',
    content:
      'The cost depends on your requirements, features, and design preferences. We offer solutions for businesses of all sizes and provide a custom quote based on your project needs.',
  },
  {
    id: 'project-timeline',
    title: 'How long does it take to build a website?',
    content:
      'Most business websites are completed within 1 to 3 weeks. More complex websites with custom features may take longer depending on the project scope.',
  },
  {
    id: 'domain-hosting',
    title: 'Do you provide domain registration and hosting?',
    content:
      'Yes. We help you choose the right domain name, register it, and set up reliable hosting so your website stays secure and accessible 24/7.',
  },
  {
    id: 'seo-service',
    title: 'Will my website be SEO-friendly?',
    content:
      'Absolutely. Every website we build follows SEO best practices, including fast loading speeds, mobile responsiveness, proper page structure, and search engine optimization.',
  },
  {
    id: 'mobile-responsive',
    title: 'Will my website work on mobile devices?',
    content:
      'Yes. All websites we create are fully responsive and optimized to provide a seamless experience across desktops, tablets, and smartphones.',
  },
  {
    id: 'support-maintenance',
    title: 'Do you offer support after launch?',
    content:
      'Yes. We provide ongoing support, updates, maintenance, and technical assistance to ensure your website continues to perform at its best.',
  },
];

const FAQSection = () => {
  const { toggleAccordion, isExpanded } = useAccordion(faqItems[0].id);

  const items = useMemo(() => faqItems, []);

  return (
    <section className="section contact-faq" aria-labelledby="faq-title">
      <div className="container">
        <p className="section-subtitle" id="faq-title">
          Frequently Asked Questions
        </p>

        <div className="faq-header">
          <h2 className="h2 section-title">
            Everything you need to know before starting your project.
          </h2>

          <p className="section-text">
            Have questions about website development, hosting, domains, or SEO?
            Here are answers to some of the most common questions our clients
            ask.
          </p>
        </div>

        <ul className="faq-list">
          {items.map(item => {
            const expanded = isExpanded(item.id);

            return (
              <li key={item.id} className="faq-item">
                <article
                  className={`accordion-card ${expanded ? 'expanded' : ''}`}
                  data-accordion
                >
                  <h3 className="card-title">
                    <button
                      className="accordion-btn"
                      onClick={() => toggleAccordion(item.id)}
                      data-accordion-btn
                      aria-expanded={expanded}
                      aria-controls={`${item.id}-content`}
                      id={`${item.id}-trigger`}
                    >
                      <ion-icon
                        name="chevron-down-outline"
                        aria-hidden={true}
                        class="down"
                      />
                      <span className="span h5">{item.title}</span>
                    </button>
                  </h3>

                  <p
                    className="accordion-content"
                    id={`${item.id}-content`}
                    role="region"
                    aria-labelledby={`${item.id}-trigger`}
                  >
                    {item.content}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
