'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

import Container from './ui/Container';

const portfolioItems = [
  {
    title: 'Jewelry Ecommerce',
    description:
      'Gems Parlor, a distinguished jewelry retailer, now boasts a website designed and developed with cutting-edge technologies. The primary focus during its creation was to enhance user experience. The result is a fully responsive, mobile-friendly platform that seamlessly adapts to any device for optimal viewing and interaction.',
    image: '/gems.png',
  },
  {
    title: 'Web3 Startup',
    description:
      'Web3 Startup is a burgeoning enterprise that now features a web application, meticulously crafted using Nextjs, Tailwindcss, and Typescript. The application is designed with a strong emphasis on responsiveness and mobile compatibility, ensuring a seamless user experience across all devices.',
    image: '/stealth.png',
  },
  {
    title: 'A.I based SaaS product',
    description:
      'This is Nextjs based website created for an A.I based software company. I created a website for them utilizing state of the art technologies, focusing on the user experience. The website is fully responsive and mobile friendly.',
    image: '/dua.png',
  },
];

export default function Portfolio() {
  return (
    <Container className="mx-auto flex max-w-[90rem]">
      <div className="flex flex-col items-center py-8 px-6 text-gray-800 font-sans max-w-fit">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.4 }}
        >
          <h1 className="text-5xl font-bold text-blue-300">Our Portfolio</h1>
          <p className="text-gray-600 dark:text-white">
            Check out some of our amazing projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  justify-items-center items-center">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white rounded overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ stiffness: 40, duration: 0.1 }}
            >
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                <h2 className="text-2xl mb-4">{item.title}</h2>
                <p className="text-gray-400 mb-8">{item.description}</p>
                <Link href="portfolio" legacyBehavior>
                  <a className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in">
                    <FaRocket className="mr-2" />
                    <span>Visit Website</span>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
