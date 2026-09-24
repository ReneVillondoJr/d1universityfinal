import type { Metadata } from 'next';

import './globals.css';

import { SiteFooter } from '@/components/shared/site-footer';
import { SiteHeader } from '@/components/shared/site-header';

export const metadata: Metadata = {
  title: 'D1 University | Discover Your Academic Future',
  description:
    'Explore universities, academic programs, events, and opportunities through D1 University.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col'>
        <SiteHeader />

        <main className='flex-1'>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
