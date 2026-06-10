'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsHighlightsSection.scss';

const highlights = [
  {
    id: 'pictuote',
    title: 'Pictuote',
    description:
      'A social media tool that helps users create beautiful quote images instantly with just one click.',
    image: '/assets/images/Projects/pictuote.png',
    category: 'SaaS Product',
    date: '2024-01-15',
    dateLabel: 'Jan 2024',
  },
  {
    id: 'achievemap',
    title: 'AchieveMap',
    description:
      'A self-growth platform that helps people track goals, build habits, and stay focused on continuous learning.',
    image: '/assets/images/Projects/achievemap.png',
    category: 'SaaS Product',
    date: '2023-11-20',
    dateLabel: 'Nov 2023',
  },
  {
    id: 'coderhabit',
    title: 'Coder Habit',
    description:
      'A habit tracker built specifically for developers to improve consistency, productivity, and coding discipline.',
    image: '/assets/images/Projects/coderhabit.png',
    category: 'Developer Tool',
    date: '2024-03-05',
    dateLabel: 'Mar 2024',
  },
  {
    id: 'careerkundli',
    title: 'CareerKundli',
    description:
      'A career guidance platform that helps students and professionals discover the right career path.',
    image: '/assets/images/Projects/careerkundli.png',
    category: 'Career Platform',
    date: '2023-09-12',
    dateLabel: 'Sep 2023',
  },
  {
    id: 'libertas',
    title: 'Libertas',
    description:
      'Built a modern and responsive IT solutions website for a client, focusing on performance, design, and user experience.',
    image: '/assets/images/Projects/libertas.png',
    category: 'Client Project',
    date: '2024-05-10',
    dateLabel: 'May 2024',
  },
  {
    id: 'akevents',
    title: 'AK Events',
    description:
      'Built a professional portfolio website for AK Events to showcase event decorations, attract new clients, and strengthen their online presence.',
    image: '/assets/images/Projects/akevents.png',
    category: 'Client Project',
    date: '2025-06-01',
    dateLabel: 'June 2025',
  },
];

const ProjectsHighlightsSection = () => {
  return (
    <motion.section
      className="section projects-highlights"
      aria-labelledby="projects-highlights-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="container" variants={staggerContainer(0.22, 0.12)}>
        <motion.div
          className="section-heading"
          variants={fadeIn('up', 20, 0.4)}
        >
          <p className="section-subtitle" id="projects-highlights-title">
            Our Projects
          </p>

          <h2 className="h2 section-title">
            Digital products and websites built to solve real-world problems.
          </h2>

          <p className="section-text">
            From SaaS products to professional business websites, we create
            modern digital solutions that help people work smarter, grow faster,
            and achieve their goals.
          </p>
        </motion.div>

        <motion.ul
          className="grid-list"
          variants={staggerContainer(0.18, 0.16)}
        >
          {highlights.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeIn('up', 22, 0.4 + index * 0.08)}
            >
              <motion.article
                className="project-card"
                variants={fadeInScale(0.5)}
              >
                <figure className="card-banner">
                  <span className="badge" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Image
                    src={item.image}
                    width={560}
                    height={350}
                    alt={item.title}
                    className="img-cover"
                    priority={index === 0}
                  />
                </figure>

                <div className="card-content">
                  <div className="meta-row">
                    <div className="badge-pill">
                      <ion-icon name="calendar-outline" aria-hidden={true} />
                      <time dateTime={item.date}>{item.dateLabel}</time>
                    </div>
                    <div className="badge-pill">
                      <ion-icon name="sparkles-outline" aria-hidden={true} />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <h3 className="h3 card-title">
                    <Link href={`/projects/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsHighlightsSection;
