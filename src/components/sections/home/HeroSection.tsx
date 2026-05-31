'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

import './HeroSection.scss';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    src: '/assets/images/hero-slide1.png',
    alt: 'Altairz hero banner 1',
    hasPlayButton: false,
  },
  {
    id: 2,
    src: '/assets/images/hero-slide2.png',
    alt: 'Altairz intro banner',
    hasPlayButton: false,
  },
  {
    id: 3,
    src: '/assets/images/hero-slide3.png',
    alt: 'Altairz hero banner 3',
    hasPlayButton: false,
  },
  {
    id: 4,
    src: '/assets/images/hero-slide4.png',
    alt: 'Altairz hero banner 4',
    hasPlayButton: false,
  },
  {
    id: 5,
    src: '/assets/images/hero-slide5.png',
    alt: 'Altairz hero banner 5',
    hasPlayButton: false,
  },
];

const slideVariants = {
  enter: (direction: number) => {
    let xVal: number | string = 0;
    if (direction > 0) {
      xVal = '100%';
    } else if (direction < 0) {
      xVal = '-100%';
    }
    return {
      x: xVal,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => {
    let xVal: number | string = 0;
    if (direction < 0) {
      xVal = '100%';
    } else if (direction > 0) {
      xVal = '-100%';
    }
    return {
      zIndex: 0,
      x: xVal,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    };
  },
};

const imageVariants = {
  enter: { scale: 1 },
  center: {
    scale: 1.06,
    transition: { duration: 4, ease: 'easeOut' },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const HeroSection: React.FC = () => {
  const [{ page, direction }, setPageState] = useState({
    page: 0,
    direction: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setPageState((prev) => {
      let newPage = prev.page + newDirection;
      if (newPage > slides.length - 1) {
        newPage = 0;
      }
      if (newPage < 0) {
        newPage = slides.length - 1;
      }
      return { page: newPage, direction: newDirection };
    });
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  const setSlide = useCallback((index: number) => {
    setPageState((prev) => {
      const dir = index > prev.page ? 1 : -1;
      return { page: index, direction: dir };
    });
  }, []);

  // Auto play functionality
  useEffect(() => {
    if (isHovered) {
      return;
    }
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  const renderSlideContent = (index: number) => {
    const slide = slides[index];
    if (slide.hasPlayButton) {
      return (
        <div className="hero-card" style={{ width: '100%', height: '100%' }}>
          <figure
            className="img-holder"
            style={
              {
                '--width': '575',
                '--height': '550',
                width: '100%',
                height: '100%',
              } as React.CSSProperties
            }
          >
            <motion.div
              variants={imageVariants}
              initial="enter"
              animate="center"
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src={slide.src}
                width={575}
                height={550}
                alt={slide.alt}
                className="img-cover"
                priority
              />
            </motion.div>
          </figure>

          <button className="play-btn" aria-label="play Altairz intro">
            <ion-icon name="play" aria-hidden={true}></ion-icon>
          </button>
        </div>
      );
    }

    return (
      <figure
        className="img-holder"
        style={
          {
            '--width': '575',
            '--height': '550',
            width: '100%',
            height: '100%',
          } as React.CSSProperties
        }
      >
        <motion.div
          variants={imageVariants}
          initial="enter"
          animate="center"
          style={{ width: '100%', height: '100%' }}
        >
          <Image
            src={slide.src}
            width={575}
            height={550}
            alt={slide.alt}
            className="img-cover"
            priority
          />
        </motion.div>
      </figure>
    );
  };

  return (
    <section
      className="section hero has-bg-image"
      aria-label="home"
      style={{ backgroundImage: "url('/assets/images/hero-bg-br.png')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Build Your Business Online with a Professional Website</h1>

          <p className="hero-text">
            We create modern websites that look great, load fast, and help your business attract more customers. From domain registration and hosting to design and SEO, we handle everything.
          </p>

          <div className="btn-wrapper">
            <Link href="services" className="btn btn-primary">
              Explore Now
            </Link>

            <Link href="contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>

        <div
          className="hero-slider"
          data-slider
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="slider-inner">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="slider-item"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
              >
                {renderSlideContent(page)}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="slider-btn prev"
            aria-label="slide to previous"
            onClick={prevSlide}
          >
            <ion-icon name="arrow-back"></ion-icon>
          </button>

          <button
            className="slider-btn next"
            aria-label="slide to next"
            onClick={nextSlide}
          >
            <ion-icon name="arrow-forward"></ion-icon>
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot-btn ${index === page ? 'active' : ''}`}
                onClick={() => setSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
