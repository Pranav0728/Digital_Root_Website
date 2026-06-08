import type { Metadata, Viewport } from 'next';

import { defaultMetadata } from '@/config/seo';
import '@/styles/globals.scss';

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon fallback */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/assets/images/hero-bg-br.png" />
        <link rel="preload" as="image" href="/assets/images/hero-slide1.png" />
        <link rel="preload" as="image" href="/assets/images/hero-slide2.png" />
        <link rel="preload" as="image" href="/assets/images/hero-slide3.png" />

        {/* Ionicons */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          defer
        ></script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
