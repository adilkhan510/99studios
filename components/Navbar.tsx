'use client';
import Link from 'next/link';
import DropdownComponent from './Dropdown';
import Container from './ui/Container';
import { useState } from 'react';
import menuitems from './contants/contants';
import { BiCollapse } from 'react-icons/bi';

import { BiMenu } from 'react-icons/bi';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <header className='flex flex-col lg:flex-row justify-between items-center my-5 px-4 lg:px-0 container mx-auto'>
        <div className='flex w-full lg:w-auto items-center justify-between'>
          <Link href='/' legacyBehavior>
            <a className='text-lg'>
              <span className='font-bold text-slate-800'>Studio</span>
              <span className='text-slate-500'>99</span>
              <span className='text-slate-800'>
                <img
                  src='/icon.png'
                  className='w-10 h-[30px] inline-block transform rotate-45'
                />
              </span>
            </a>
          </Link>
          <div className='block lg:hidden' onClick={handleMenuClick}>
            <span className='w-4 h-4 text-gray-800'>
              {isMobileMenuOpen ? (
                <BiCollapse size={30} />
              ) : (
                <BiMenu size={30} />
              )}
            </span>
          </div>
        </div>
        <div
          className={`transition duration-500 ease-in-out transform ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full lg:w-auto mt-2 lg:flex lg:mt-0 `}
        >
          <ul className='flex flex-col lg:flex-row lg:gap-3 text-md items-center'>
            {menuitems.map((item, index) => (
              <>
                {item.children ? (
                  <DropdownComponent
                    key={item.title}
                    title={item.title}
                    lastItem={index === menuitems.length - 1}
                    isMobileMenuOpen={isMobileMenuOpen}
                  >
                    {item.children}
                  </DropdownComponent>
                ) : (
                  <li key={item.title}>
                    <Link href={item.path} legacyBehavior>
                      <a className='flex lg:px-3 py-2 text-black hover:text-gray-900 '>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )}
              </>
            ))}
          </ul>
          <div className='lg:hidden flex flex-col items-start mt-3 gap-4 items-center'>
            <Link href='#' legacyBehavior>
              <a className='block text-md text-gray-500'>Client Login</a>
            </Link>
            <Link href='#' legacyBehavior>
              <a className='block text-md text-blue-600 bg-white'>
                Get a Quote
              </a>
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          <Link href='#' legacyBehavior>
            <a className='text-md text-blue-600'>Client Login</a>
          </Link>
          <Link href='#' legacyBehavior>
            <a className='text-md text-black-100 bg-white px-4 py-2 shadow-lg border-black-[4px]'>
              Get a Quote
            </a>
          </Link>
        </div>
      </header>
    </Container>
  );
}
