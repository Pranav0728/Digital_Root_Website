'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesFeatureSection.scss';

const features = [
  'Professional website design and development.',
  'Domain registration and web hosting setup.',
  'Mobile-friendly and responsive websites.',
  'SEO optimization to improve Google rankings.',
];

const ServicesFeatureSection = () => {
  return (
    <motion.section
      className="section services-feature"
      aria-labelledby="capability-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.12)}>
        <motion.figure
          className="feature-banner"
          variants={fadeIn('right', 40, 0.45)}
        >
          <span className="glow" aria-hidden="true" />
          <Image
            src="/assets/images/feature-banner-br.png"
            width={800}
            height={531}
            alt="Feature capabilities"
            className="w-100"
            priority={false}
          />
        </motion.figure>

        <motion.div
          className="feature-content"
          variants={staggerContainer(0.16, 0.18)}
        >
          <motion.p
            className="section-subtitle"
            id="capability-title"
            variants={fadeIn('up', 14, 0.35)}
          >
            What We Offer
          </motion.p>

          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 20, 0.45)}
          >
            Everything you need to build a strong online presence.
          </motion.h2>

          <motion.p className="section-text" variants={fadeIn('up', 20, 0.55)}>
            We help businesses create professional websites, establish their
            online identity, and attract more customers. From website design and
            development to domain registration, hosting, and SEO, we provide
            complete digital solutions under one roof.
          </motion.p>

          <motion.ul
            className="feature-list"
            variants={staggerContainer(0.16, 0.2)}
          >
            {features.map((item, index) => (
              <motion.li
                key={item}
                variants={fadeIn('up', 14, 0.45 + index * 0.08)}
              >
                <motion.div
                  className="feature-card"
                  variants={fadeInScale(0.45)}
                >
                  <span className="card-icon" aria-hidden="true">
                    <ion-icon name="checkmark" aria-hidden={true} />
                  </span>
                  <span className="span">{item}</span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesFeatureSection;
