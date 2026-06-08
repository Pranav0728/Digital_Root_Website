'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { ProjectContactFormData } from '@/types';

import './ConnectSection.scss';

// Validation schema
const projectContactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .trim(),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .trim(),
  company: yup.string().optional().trim(),
  budget: yup
    .string()
    .required('Please select a budget range')
    .notOneOf([''], 'Please select a budget range'),
  details: yup
    .string()
    .required('Project details are required')
    .min(10, 'Please provide at least 10 characters of detail')
    .trim(),
  nda: yup.boolean().default(false),
});

const ConnectSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectContactFormData>({
    resolver: yupResolver(projectContactSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      details: '',
      nda: false,
    },
  });

  const onSubmit = async (data: ProjectContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      reset();
      alert(
        `Thank you ${data.name}! Your request has been sent successfully. We will contact you at ${data.email} shortly.`
      );
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or contact us directly via email.');
    }
  };
  return (
    <section
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-card">
          <p className="section-subtitle" id="contact-title">
            Say hello
          </p>
          <h2 className="h2 section-title">Connect with the Digital Root team.</h2>
          <p className="section-text contact-intro">
            Prefer email? Reach out at{' '}
            <Link href="mailto:xroot.info@email.com" className="link-inline">
              xroot.info@email.com
            </Link>{' '}
            or call us directly at{' '}
            <Link href="tel:918591964968" className="link-inline">
              918591964968
            </Link>
            . Our global studio spans three continents with specialists ready to
            join your next build.
          </p>

          <ul className="contact-list">
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Hours</p>
                <p className="card-text">Sun – Sat, 8:30 AM to 10:00 PM</p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="globe-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Locations</p>
                <p className="card-text">
                  Mumbai • Remote
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Slack community</p>
                <p className="card-text">
                  Join practitioners swapping learnings in real time.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          id="quote"
          aria-describedby="contact-title"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-header">
            <h3 className="h3">Start a project conversation</h3>
            <p className="section-text">
              Tell us about your product, timeline, and the outcomes you’re
              targeting.
            </p>
            <p className="response-time">
              We respond within one business day. Need a faster kickoff? Leave a
              note below and we’ll prioritize your request.
            </p>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-name">
                Full name
              </label>
              <input
                type="text"
                id="contact-name"
                placeholder="Jane Doe"
                className={`input-field ${errors.name ? 'error' : ''}`}
                {...register('name')}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                placeholder="you@email.com"
                className={`input-field ${errors.email ? 'error' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-company">
                Company
              </label>
              <input
                type="text"
                id="contact-company"
                placeholder="Your company"
                className={`input-field ${errors.company ? 'error' : ''}`}
                {...register('company')}
              />
              {errors.company && (
                <span className="error-message">{errors.company.message}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-budget">
                Project Type
              </label>
              <select
                id="contact-budget"
                className={`input-field ${errors.budget ? 'error' : ''}`}
                {...register('budget')}
              >
                <option value="">Select service</option>
                <option value="Web Development">Web Development & Design</option>
                <option value="Domain & Hosting">Domain & Hosting</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Full Digital Solution">Full Digital Solution</option>
              </select>
              {errors.budget && (
                <span className="error-message">{errors.budget.message}</span>
              )}
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="contact-details">
              Project details
            </label>
            <textarea
              id="contact-details"
              rows={4}
              placeholder="Share context, goals, and key milestones"
              className={`input-field ${errors.details ? 'error' : ''}`}
              {...register('details')}
            ></textarea>
            {errors.details && (
              <span className="error-message">{errors.details.message}</span>
            )}
          </div>

          <label className="checkbox" htmlFor="contact-nda">
            <input type="checkbox" id="contact-nda" {...register('nda')} />
            <span>I&apos;d like to start with an NDA.</span>
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit request'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectSection;
