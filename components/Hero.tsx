'use client';

import { Button } from './Button';
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
        <h1 className='text-8xl mb-10 animate-fade-in-up'>99 Studios</h1>
        <h2 className='text-md animate-fade-in '>{subtitle}</h2>
        <p className='text-sm animate-fade-in'>{description}</p>
        <Button
          href='/'
          variant='primary'
          size='large'
          className='animate-fade-in'
        >
          Get Started
        </Button>
      </div>
      <div className='h-[1000rem]'></div>
    </Container>
  );
}
