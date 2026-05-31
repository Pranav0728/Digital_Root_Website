'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { SocialLink, NewsletterFormData } from '@/types';
import './Footer.scss';

// Validation schema
const newsletterSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .trim(),
});

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // Handle newsletter subscription logic here
      // Example: await subscribeToNewsletter(data.email);

      // Simulate API call with the email data
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form on successful submission
      reset();

      // You can add success notification here
      alert(`Successfully subscribed ${data.email} to newsletter!`);
    } catch (error) {
      // You can add error notification here
      console.error('Newsletter subscription failed:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };
  const socialLinks: SocialLink[] = [
    {
      href: 'https://x.com/yourusername',
      icon: 'logo-twitter',
      label: 'X',
    },
    {
      href: 'https://linkedin.com/in/yourusername',
      icon: 'logo-linkedin',
      label: 'LinkedIn',
    },
    {
      href: 'https://instagram.com/yourusername',
      icon: 'logo-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://github.com/yourusername',
      icon: 'logo-github',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="footer">
      <div className="container grid-list">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/assets/images/altairz-light.svg"
              width={74}
              height={24}
              alt="Altairz home"
            />
          </Link>

          <p className="footer-text">
            &copy; {new Date().getFullYear()} Altairz Technologies. <br />
            All rights reserved.
          </p>

          <ul className="social-list">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name={social.icon}></ion-icon>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in Touch</p>
          </li>

          <li>
            <address className="footer-text">
              Navi Mumbai, Maharashtra, India
            </address>

          </li>

          <li>
            <Link
              href="mailto:xroot.info@gmail.com"
              className="footer-link"
            >
              xroot.info@gmail.com
            </Link>
          </li>

          <li>
            <Link href="tel:+918591964968" className="footer-link">
              +91 85919 64968
            </Link>
          </li>
        </ul>

        <div className="footer-list">
          <p className="h4 footer-list-title">Services</p>

          <ul>
            <li>
              <Link href="/services#development" className="footer-link">
                Website Design & Development
              </Link>
            </li>

            <li>
              <Link href="/services#domain" className="footer-link">
                Domain Registration
              </Link>
            </li>

            <li>
              <Link href="/services#hosting" className="footer-link">
                Web Hosting
              </Link>
            </li>

            <li>
              <Link href="/services#seo" className="footer-link">
                SEO Optimization
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-list">
          <p className="h4 footer-list-title">Our Newsletter</p>

          <p className="footer-text">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="input-wrapper">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                className={`input-field ${errors.email ? 'error' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
