'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsCTASection.scss';

const ProjectsCTASection = () => {
  return (
    <motion.section
      className="projects-cta"
      aria-label="Call to action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      <motion.div className="container" variants={staggerContainer(0.16, 0.12)}>
        <motion.p className="eyebrow" variants={fadeIn('up', 14, 0.4)}>
          Start Your Journey
        </motion.p>

        <motion.h2
          className="h2 section-title"
          variants={fadeIn('up', 20, 0.5)}
        >
          Let's turn your ideas into a successful online presence.
        </motion.h2>

        <motion.p className="section-text" variants={fadeIn('up', 20, 0.58)}>
          From website design and development to hosting, domains, and SEO,
          Digital Root provides everything you need to build, launch, and grow your
          business online.
        </motion.p>

        <motion.div variants={fadeInScale(0.55, 0.7)}>
          <Link href="/contact#quote" className="btn btn-primary">
            Start Your Project
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsCTASection;
