'use client';
import Link from 'next/link';
import Container from './ui/Container';
import { motion } from 'framer-motion'; // Import framer-motion
import {
  FaArrowRight,
  FaAddressBook,
  FaAccessibleIcon,
  FaRocket,
} from 'react-icons/fa';

const portfolioItems = [
  {
    title: 'Gems Parlor',
    description:
      'Gems Parlor is a jewelry store. I created a website for them utilizing state of the art technologies, focusing on the user experience. The website is fully responsive and mobile friendly.',
    image: '/gems.png',
    path: 'https://www.gemsparlor.com/',
  },
  {
    title: 'Nameless.io',
    description:
      'Nameless.io is a stealth startup. I created a website for them utilizing state of the art technologies, focusing on the user experience. The website is fully responsive and mobile friendly.',
    image: '/stealth.png',
    path: 'https://app.nameless.io/',
  },
];

export default function Portfolio() {
  return (
    <Container className='mt-[10rem]'>
      <h1 className='text-5xl font-bold mb-4 text-blue-300'>Our Portfolio</h1>
      <p className='text-gray-600 mb-8 text-lg'>
        Check out some of our amazing projects.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {portfolioItems.map((item) => (
          <motion.div
            key={item.title}
            className='rounded shadow-lg overflow-hidden'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-64 object-cover'
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2'>{item.title}</h2>
              <p className='text-gray-600 text-md'>{item.description}</p>
              <Link href={item.path} legacyBehavior>
                <a className='text-black-100 mt-4 inline-block text-md bg-blue-300 px-6 py-2 rounded-sm'>
                  <FaRocket className='inline-block text-black-100' /> Visit
                  Website
                </a>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
