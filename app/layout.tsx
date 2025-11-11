import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sumitkportfoliodev.netlify.app/'),
  title: 'Sumit Kumar - Full-Stack & AI Developer | Python/React Expert',
  description: 'A passionate Computer Science student and AI/ML Enthusiast building data-driven, scalable applications. Expertise in Python, React, Node.js, TensorFlow—boosted workflow efficiency by 30% and ML model accuracy by 15%.',
  keywords: 'Full-Stack Developer, AI Developer, ML Engineer, Python, React, Node.js, TensorFlow, Sumit Kumar',
  authors: [{ name: 'Sumit Kumar' }],
  openGraph: {
    title: 'Sumit Kumar - Full-Stack & AI Developer',
    description: 'Building scalable, data-driven applications with AI/ML expertise',
    url: 'https://sumitkportfoliodev.netlify.app/',
    siteName: 'Sumit Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Kumar - Full-Stack & AI Developer',
    description: 'Building scalable, data-driven applications with AI/ML expertise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sumit Kumar',
              jobTitle: 'Full-Stack Developer & AI/ML Enthusiast',
              url: 'https://sumitkportfoliodev.netlify.app/',
              sameAs: [
                'https://github.com/sumit7366',
                'https://www.linkedin.com/in/sumit7366/',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rajeev Nagar, Road No. 24',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                addressCountry: 'India',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
