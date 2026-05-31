'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsResultsSection.scss';

const results = [
  {
    id: 'performance',
    icon: 'rocket-outline',
    title: '99+ PageSpeed Score',
    description:
      'We optimize every website for blazing fast performance, ensuring your visitors stay engaged and search engines love your content.',
  },
  {
    id: 'conversion',
    icon: 'bar-chart-outline',
    title: '40% Higher Conversion',
    description:
      'Our user-centric designs and strategic call-to-actions help convert your casual website visitors into loyal customers.',
  },
  {
    id: 'seo-ranking',
    icon: 'search-outline',
    title: 'Top Search Rankings',
    description:
      'Using proven SEO techniques, we help our clients reach the first page of search results for their most valuable keywords.',
  },
  {
    id: 'uptime',
    icon: 'cloud-done-outline',
    title: '99.9% Hosting Uptime',
    description:
      'Our reliable hosting infrastructure ensures your business stays online 24/7, providing a stable home for your digital presence.',
  },
];

const ProjectsResultsSection = () => {
  return (
    <motion.section
      className="section projects-results"
      aria-labelledby="projects-results-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.18, 0.12)}>
        <motion.div className="section-header" variants={fadeIn('up', 18, 0.4)}>
          <p className="section-subtitle" id="projects-results-title">
            Outcomes
          </p>
          <h2 className="h2 section-title">
            Measurable results that drive your business forward.
          </h2>
        </motion.div>

        <motion.div
          className="content-grid"
          variants={staggerContainer(0.18, 0.18)}
        >
          {results.map((item, index) => (
            <motion.article
              key={item.id}
              className="content-card result-card"
              variants={fadeInScale(0.45, 0.35 + index * 0.1)}
            >
              <div className="icon-badge">
                <ion-icon name={item.icon} aria-hidden={true} />
              </div>
              <h3 className="h4 card-title">{item.title}</h3>
              <p className="section-text">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsResultsSection;
