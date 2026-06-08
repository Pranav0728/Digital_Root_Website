'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

import { useAccordion } from '@/hooks/useAccordion';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './AboutStorySection.scss';

const storyAccordionItems = [
  {
    id: 'about-human-centered',
    title: 'A Passion for Building',
    content:
      'Digital Root was born from a passion for technology and problem-solving. What started as a curiosity about coding gradually became a mission to create digital solutions that help people and businesses succeed online. Through continuous learning, experimentation, and dedication, we transformed ideas into real products and services.',
  },
  {
    id: 'about-cross-functional',
    title: 'Experience Through Innovation',
    content:
      'Over the years, we have built multiple SaaS products including Pictuote, AchieveMap, Coder Habit, and CareerKundli. Each project gave us valuable experience in design, development, user experience, and product strategy. These lessons help us deliver better results for every client we work with.',
  },
  {
    id: 'about-measurable-impact',
    title: 'Committed to Your Growth',
    content:
      'Today, Digital Root helps businesses establish a strong digital presence through professional websites, domain registration, hosting, and SEO services. We understand that every business has unique goals, and we are committed to creating solutions that build trust, attract customers, and support long-term growth.',
  },
];

const AboutStorySection = () => {
  const { toggleAccordion, isExpanded } = useAccordion(
    storyAccordionItems[0].id
  );
  const items = useMemo(() => storyAccordionItems, []);

  return (
    <motion.section
      className="section about-story"
      id="story"
      aria-labelledby="story-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.24, 0.12)}>
        <motion.figure
          className="about-banner"
          variants={fadeIn('right', 40, 0.6)}
        >
          <Image
            src="/assets/images/about-us1.png"
            width={800}
            height={580}
            alt="Our studio"
            className="w-100"
            priority
          />
        </motion.figure>

        <motion.div
          className="about-content"
          variants={staggerContainer(0.18, 0.18)}
        >
          <motion.p
            className="section-subtitle"
            id="story-title"
            variants={fadeIn('up', 16, 0.4)}
          >
            Our Story
          </motion.p>
          <motion.div
            className="section-heading"
            variants={fadeIn('up', 22, 0.5)}
          >
            <motion.h2
              className="h2 section-title"
              variants={fadeIn('up', 26, 0.55)}
            >
              Turning ideas into digital experiences that drive growth.
            </motion.h2>

            <motion.p
              className="section-text"
              variants={fadeIn('up', 26, 0.6)}
            >
              Digital Root was built on a passion for creating meaningful digital solutions.
              From developing SaaS products to building websites for businesses, our
              journey has always been about solving real problems through technology.
              Today, we help startups, entrepreneurs, and growing businesses establish a
              strong online presence with modern websites, reliable hosting, and
              result-driven digital solutions.
            </motion.p>
          </motion.div>

          <motion.ul
            className="accordion-list"
            variants={staggerContainer(0.14, 0.2)}
          >
            {items.map(item => {
              const expanded = isExpanded(item.id);

              return (
                <motion.li
                  key={item.id}
                  className="about-item"
                  variants={fadeInScale(0.5)}
                >
                  <motion.article
                    className={`accordion-card ${expanded ? 'expanded' : ''}`}
                    data-accordion
                    layout
                    transition={{
                      layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    }}
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
                  </motion.article>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutStorySection;
