import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='my-20 flex flex-col items-center justify-center space-y-1'>
      <p className='text-center text-sm text-slate-500'>
        Copyright © {new Date().getFullYear()} 99Studios. All rights reserved.
      </p>
      <p className='text-center text-xs text-slate-500 mt-1'>
        Made by{' '}
        <Link href='https://web3templates.com' legacyBehavior>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline text-blue-600'
          >
            99Studios
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
