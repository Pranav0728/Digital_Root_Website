import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import AboutSection from '@/components/sections/home/AboutSection';
import CTASection from '@/components/sections/home/CTASection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import HeroSection from '@/components/sections/home/HeroSection';
import ProjectSection from '@/components/sections/home/ProjectSection';
import ServiceSection from '@/components/sections/home/ServiceSection';
import StatSection from '@/components/sections/home/StatSection';

export const metadata: Metadata = {
  title: 'Altairz • Web Development & Digital Solutions',
  description:
    'Altairz helps startups and businesses launch scalable web applications, AI solutions, automation systems, and custom software that drive real results.',
  openGraph: {
    title: 'Altairz • Web Development & Digital Solutions',
    description:
      'Altairz helps startups and businesses launch scalable web applications, AI solutions, automation systems, and custom software that drive real results.',
    images: ['/assets/images/hero-slide1.png'],
  },
};

export default function Home() {
  return (
    <Layout>
      <article>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <FeatureSection />
        <StatSection />
        <ProjectSection />
        <CTASection />
      </article>
    </Layout>
  );
}
