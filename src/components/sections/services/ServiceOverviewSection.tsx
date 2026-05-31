'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServiceOverviewSection.scss';

const services = [
  {
    id: 'development',
    title: 'Website Development & Design',
    description:
      'We build modern, fast, and responsive websites tailored to your business goals. Our team uses technologies such as Next.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, and modern UI frameworks to create websites that look professional and perform flawlessly. Whether you need a business website, portfolio, landing page, SaaS platform, or e-commerce store, we focus on speed, user experience, mobile responsiveness, security, and scalability. Every website is optimized to help you attract customers, build trust, and grow your business online.',
    image: '/assets/images/services/webdev.png',
    icon: 'code-slash-outline',
    actionLabel: 'Explore Development',
    href: '/contact#quote',
    accent: 'linear-gradient(135deg, #B55233, #D97757)',
  },

  {
    id: 'domain',
    title: 'Domain Registration',
    description:
      'Your domain name is the foundation of your online identity. We help you choose, register, and manage the perfect domain for your business. From securing popular extensions such as .com, .in, and .net to configuring DNS records, business emails, SSL certificates, and domain security, we handle the complete setup process. Our goal is to ensure your brand has a professional and memorable online presence from day one.',
    image: '/assets/images/services/domain.png',
    icon: 'globe-outline',
    actionLabel: 'Get Your Domain',
    href: '/contact#quote',
    accent: 'linear-gradient(135deg, #C46A4A, #E09A7A)',
  },

  {
    id: 'hosting',
    title: 'Reliable Web Hosting',
    description:
      'A great website needs reliable hosting. We provide secure, high-performance hosting solutions designed for speed, stability, and scalability. Our hosting services include SSL certificates, daily backups, uptime monitoring, CDN integration, server optimization, security protection, and technical support. Whether you are launching a small business website or a growing web application, we ensure your website remains fast, secure, and accessible to visitors 24/7.',
    image: '/assets/images/services/hosting.png',
    icon: 'server-outline',
    actionLabel: 'View Hosting Plans',
    href: '/contact#quote',
    accent: 'linear-gradient(135deg, #8F4A2A, #B55233)',
  },

  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Having a website is only the first step. We help your business get discovered on Google through proven Search Engine Optimization strategies. Our SEO services include keyword research, on-page optimization, technical SEO, website speed improvements, content optimization, local SEO, schema implementation, and search performance tracking. By improving your visibility in search results, we help attract more qualified visitors, generate leads, and increase business growth over time.',
    image: '/assets/images/services/seo.png',
    icon: 'trending-up-outline',
    actionLabel: 'Boost Your Visibility',
    href: '/contact#quote',
    accent: 'linear-gradient(135deg, #D97757, #F0B08A)',
  },
];


const ServiceOverviewSection = () => {
  return (
    <motion.section
      className="section service services-overview"
      aria-labelledby="service-overview-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="container" variants={staggerContainer(0.18, 0.1)}>
        <div className="section-header">
          <motion.p
            className="section-subtitle"
            id="service-overview-title"
            variants={fadeIn('up', 16, 0.35)}
          >
            Service Overview
          </motion.p>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 24, 0.45)}
          >
          Everything you need to build and grow your online presence. 
          </motion.h2>
        </div>

        <motion.div className="services-list" variants={staggerContainer(0.2, 0.2)}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`service-item ${index % 2 !== 0 ? 'reverse' : ''}`}
              variants={fadeIn('up', 30, 0.35 + index * 0.1)}
            >
              <div className="service-image-wrapper">
                <motion.div
                  className="image-container"
                  variants={fadeInScale(0.5)}
                >
                  <div className="blob-shape" style={{ ['--accent' as string]: service.accent }} />
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="service-image"
                  />
                  <div 
                    className="image-accent" 
                    style={{ ['--accent' as string]: service.accent }}
                  />
                </motion.div>
              </div>

              <div className="service-content">
                <span className="section-count">0{index + 1}</span>
                <motion.div
                  className="content-icon"
                  style={{ ['--accent' as string]: service.accent }}
                  variants={fadeIn('up', 16, 0.4)}
                >
                  <ion-icon name={service.icon} aria-hidden={true} />
                </motion.div>
                <motion.h3
                  className="h3 service-title"
                  variants={fadeIn('up', 16, 0.45)}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="service-text"
                  variants={fadeIn('up', 16, 0.5)}
                >
                  {service.description}
                </motion.p>
                <motion.div variants={fadeIn('up', 16, 0.55)}>
                  <Link href={service.href} className="btn btn-primary">
                    <span className="span">{service.actionLabel}</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden={true} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceOverviewSection;
