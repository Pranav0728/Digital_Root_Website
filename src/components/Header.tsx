'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import type { NavLink, SocialLink } from '@/types';

import './Header.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    // { href: '/blog', label: 'Blog' },
  ];

   const socialLinks: SocialLink[] = [
    {
      href: 'https://x.com/molawade_pranav',
      icon: 'logo-twitter',
      label: 'X',
    },
    {
      href: 'https://www.linkedin.com/in/pranav-molawade/',
      icon: 'logo-linkedin',
      label: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/pranav_2_8',
      icon: 'logo-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://github.com/Pranav0728',
      icon: 'logo-github',
      label: 'GitHub',
    },
        { href: 'https://www.youtube.com/@pranav8534', icon: 'logo-youtube', label: 'YouTube' },

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }

    return () => {
      document.body.classList.remove('nav-active');
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`} data-header>
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logos/logo-darkbg.png"
            width={50}
            height={30}
            alt="Digital Root home"
            className="logo-light"
          />
          <Image
            src="/assets/images/logos/logo1rbg.png"
            width={50}
            height={30}
            alt="Digital Root home"
            className="logo-dark"
          />
        </Link>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <Link href="/" className="logo">
              <Image
                src="/assets/images/logos/logo-darkbg.png"
                width={50}
                height={30}
                alt="Digital Root home"
              />
            </Link>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleNav}
            >
              <ion-icon name="close-outline" aria-hidden={true}></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="wrapper">
            <Link href="mailto:xroot.info@email.com" className="contact-link">
              xroot.info@email.com
            </Link>
            <Link href="tel:918591964968" className="contact-link">
              918591964968
            </Link>
          </div>

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
        </nav>

        <Link href="/contact#quote" className="btn btn-primary">
          Contact us
        </Link>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" aria-hidden={true}></ion-icon>
        </button>

        <div
          className={`overlay ${isNavOpen ? 'active' : ''}`}
          onClick={closeNav}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              closeNav();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          data-overlay
        ></div>
      </div>
    </header>
  );
};

export default Header;
