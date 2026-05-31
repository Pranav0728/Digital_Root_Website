'use client';

import Image from 'next/image';
import React from 'react';

import { useAccordion } from '../../../hooks/useAccordion';

import './AboutSection.scss';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const aboutFeatures: AccordionItem[] = [
  {
    id: 'professional-design',
    title: 'Modern & Professional Designs',
    content:
      "We design websites that capture your brand's unique identity and build instant trust with your visitors. Our designs are not just visually stunning but also optimized for user experience (UX), making it simple for customers to navigate, find your services, and get in touch with you. We focus on clean typography, beautiful color palettes, and clear call-to-action buttons that convert clicks into clients.",
  },
  {
    id: 'fast-secure-dev',
    title: 'Fast, Secure & Mobile-Ready Build',
    content:
      'A beautiful design is only as good as the technology running it. We write clean, optimized code to ensure your website loads in under 2 seconds, which is crucial for keeping visitors on your site and ranking higher on Google. Every site we build is fully responsive, looking perfect on mobile phones, tablets, and desktops. We also configure free security SSL certificates to keep your site and user data protected.',
  },
  {
    id: 'all-in-one-setup',
    title: 'Domain, Hosting & SEO Handled',
    content:
      'We make launching a website completely stress-free by handling all technical steps for you. From finding and registering your perfect domain name to setting up fast, reliable cloud hosting, we set up the solid foundation your site needs. We also implement essential search engine optimization (SEO) configurations, making sure Google index crawl bots can read your site and rank you in local searches from day one.',
  },
];

const AboutSection = () => {
  const { toggleAccordion, isExpanded } = useAccordion(aboutFeatures[0].id);

  return (
    <section className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <Image
            src="/assets/images/about-banner-br.png"
            width={800}
            height={580}
            alt="about banner"
            className="w-100"
            priority
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle" id="about-label">
            Why Choose Us?
          </p>

          <h2 className="h2 section-title">
            We build high-performing websites that deliver real business growth.
          </h2>

          <ul>
            {aboutFeatures.map((feature) => (
              <li key={feature.id} className="about-item">
                <div
                  className={`accordion-card ${isExpanded(feature.id) ? 'expanded' : ''}`}
                  data-accordion
                >
                  <h3 className="card-title">
                    <button
                      className="accordion-btn"
                      onClick={() => toggleAccordion(feature.id)}
                      data-accordion-btn
                    >
                      <ion-icon
                        name="chevron-down-outline"
                        aria-hidden={true}
                        class="down"
                      />

                      <span className="span h5">{feature.title}</span>
                    </button>
                  </h3>

                  <p className="accordion-content">{feature.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
