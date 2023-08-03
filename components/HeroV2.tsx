'use client';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '/public/hero.png';
import Container from './ui/Container';
import { motion } from 'framer-motion';

export default function HeroV2() {
  return (
    <Container className="max-w-[90rem]">
      <div className="flex flex-col md:flex-row items-center pt-16 pb-8 md:pt-12 md:pb-24 justify-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="lg:max-w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-blue-200 leading-snug">
            Elevate Your Business With Us
          </h1>
          <p className="text-lg mt-4 text-slate-600 min-w-2xl">
            With our deep expertise in modern web technologies, we&apos;re here
            to elevate your online presence. We enhance your visibility and
            stimulate your growth, propelling your business into the digital
            future.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 text-lg">
            <Link
              href="/contact"
              className="text-gray-500 rounded-md p-4 font-semibold  hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105  dark:text-black bg-blue-100 shadow-md"
            >
              Start your project
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-500 rounded-md p-4 bg-blue-100 font-semibold shadow-md hover:bg-blue-400 
              hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 dark:text-black "
            >
              View our portfolio
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="py-6 md:order-1 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            src={heroImage}
            alt="in the air"
            width={600}
            height={450}
            loading="eager"
          />
        </motion.div>
      </div>
    </Container>
  );
}
