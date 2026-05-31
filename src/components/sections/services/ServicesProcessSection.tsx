'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesProcessSection.scss';

const processSteps = [
  {
    id: 'consultation',
    title: 'Understand Your Needs',
    description:
      'We discuss your business, goals, and requirements to understand exactly what you need.',
    icon: 'chatbubbles-outline',
  },
  {
    id: 'design-development',
    title: 'Design & Development',
    description:
      'Our team designs and builds a professional website tailored to your brand and business.',
    icon: 'code-slash-outline',
  },
  {
    id: 'launch-growth',
    title: 'Launch & Grow',
    description:
      'We launch your website, set up hosting, and help improve visibility through SEO and ongoing support.',
    icon: 'rocket-outline',
  },
];

const ServicesProcessSection = () => {
  return (
    <motion.section
      className="services-process"
      id="engagements"
      aria-labelledby="process-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.12)}>
        <motion.p
          className="section-subtitle"
          id="process-title"
          variants={fadeIn('up', 16, 0.35)}
        >
          How we work
        </motion.p>
        <motion.div variants={fadeIn('up', 18, 0.45)}>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 20, 0.5)}
          >
            A simple process built around your business goals.
          </motion.h2>

          <motion.p className="section-text" variants={fadeIn('up', 20, 0.55)}>
            From planning and design to development and launch, we work closely
            with you at every step to create a website that helps your business
            grow online.
          </motion.p>
        </motion.div>

        <motion.div
          className="content-grid"
          variants={staggerContainer(0.18, 0.15)}
        >
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              className="content-card process-card"
              variants={fadeInScale(0.5, 0.2 + index * 0.08)}
            >
              <div className="icon-badge" data-step={`0${index + 1}`}>
                <ion-icon name={step.icon} aria-hidden={true} />
              </div>
              <h3 className="h4 card-title">{step.title}</h3>
              <p className="section-text">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesProcessSection;
