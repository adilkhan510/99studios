import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'studio99 - Creative Web Development Studio',
    template: '%s | studio99',
  },
  description: 'Creative Web Development Studio',
  openGraph: {
    title: 'studio99',
    description: 'Creative Web Development Studio',
    url: 'https://studio99.io/',
    siteName: 'studio99 - Creative Web Development Studio',
    images: [
      {
        url: 'https://99studios.io/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'studio99',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='mt-[var(navigation-height)]'>{children}</main>
      </body>
    </html>
  );
}
