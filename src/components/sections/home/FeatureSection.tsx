'use client';

import Image from 'next/image';
import React from 'react';

import './FeatureSection.scss';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'All-in-One Services',
    description: 'We handle everything from domain setup and fast cloud hosting to complete custom design and code development.',
  },
  {
    id: 2,
    title: 'Hassle-Free Domain Setup',
    description: 'We help you find, select, and purchase the perfect web address (.com, .org, etc.) that matches your business identity.',
  },
  {
    id: 3,
    title: 'Reliable & Fast Hosting',
    description: 'Your website will live on secure, high-performance servers, guaranteeing fast load speeds and 24/7 uptime for visitors.',
  },
  {
    id: 4,
    title: 'Built-in Google SEO',
    description: 'We configure search engine optimization out of the box so that your business ranks higher and gets found by customers.',
  },
];

const FeatureSection = () => {
  return (
    <section className="section feature" aria-labelledby="feature-label">
      <div className="container">
        <figure className="feature-banner">
          <Image
            src="/assets/images/feature-banner-br.png"
            width={800}
            height={531}
            alt="feature banner"
            className="w-100"
            loading="lazy"
          />
        </figure>

        <div className="feature-content">
          <p className="section-subtitle" id="feature-label">
            Our Solutions
          </p>

          <h2 className="h2 section-title">
            We handle all the technical work so you can grow your business.
          </h2>

          <p className="section-text">
            Setting up a website shouldn&apos;t feel overwhelming. We combine design, domain registration, server hosting, and search optimization into a single, straightforward package so your online journey is smooth and successful.
          </p>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature.id}>
                <div className="feature-card">
                  <div className="card-icon">
                    <ion-icon name="checkmark" aria-hidden={true} />
                  </div>

                  <span className="span">
                    <strong>{feature.title}</strong>: {feature.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
