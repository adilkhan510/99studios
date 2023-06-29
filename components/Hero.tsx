'use client';

import Container from './Container';
import { motion } from 'framer-motion';

const typeWriterEffect = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};
const typeWriterChar = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <Container>
      <div className='flex w-[1100px] h-[600px] justify-center items-center flex-col m-auto space-y-4'>
        <motion.h1
          variants={typeWriterEffect}
          initial='hidden'
          animate='visible'
          className='text-8xl mb-10'
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={char + '-' + index}
              variants={typeWriterChar}
              className='inline-block'
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <h2 className='text-md '>{subtitle}</h2>
        <p className='text-sm '>{description}</p>
      </div>
    </Container>
  );
}
