import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '99 studios',
    template: '%s | 99 studios',
  },
  description: 'Creative Web Development Studio',
  openGraph: {
    title: '99 studios',
    description: 'Creative Web Development Studio',
    url: 'https://99studios.io/',
    siteName: '99 studios',
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
    title: 'Adil Khan',
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
