'use client';

import Link from 'next/link';

import './ServiceSection.scss';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    icon: 'code-slash-outline',
    title: 'Website Design & Development',
    description:
      'Beautiful, fast, and responsive websites built to help your business grow online.',
    link: '/services#development',
  },
  {
    icon: 'globe-outline',
    title: 'Domain Registration',
    description:
      'Get the perfect domain name for your business and establish your online identity.',
    link: '/services#domain',
  },
  {
    icon: 'server-outline',
    title: 'Web Hosting',
    description:
      'Reliable and secure hosting solutions to keep your website online 24/7.',
    link: '/services#hosting',
  },
  {
    icon: 'trending-up-outline',
    title: 'SEO Optimization',
    description:
      'Improve your Google rankings and attract more customers through effective SEO.',
    link: '/services#seo',
  },
];

const ServiceSection = () => {
  return (
    <section className="section service" aria-labelledby="service-label">
      <div className="container">
        <p className="section-subtitle" id="service-label">
          What We Do
        </p>

        <h2 className="h2 section-title">
          Everything you need to build and grow your online presence.
        </h2>

        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name={service.icon} aria-hidden={true} />
                </div>

                <h3 className="h4 card-title">{service.title}</h3>

                <p className="card-text">{service.description}</p>

                <Link href={service.link} className="btn-text">
                  <span className="span">Learn More</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden={true} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
