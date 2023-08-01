'use client';
import { useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  title: string;
  lastItem: boolean;
  children: { title: string; path: string }[];
  isMobileMenuOpen: boolean;
}

export default function DropdownComponent({
  title,
  lastItem,
  children,
  isMobileMenuOpen,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className='relative'>
      <div className='group'>
        <button
          onClick={toggleDropdown}
          className='flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900'
        >
          <span>{title}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='black'
            className={`w-3 h-3 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            ></path>
          </svg>
        </button>
        {isOpen && isMobileMenuOpen && (
          <div
            className={`lg:absolute w-full lg:w-48 z-10 ${
              lastItem
                ? 'lg:right-0 origin-top-right'
                : 'lg:left-0 origin-top-left'
            }`}
          >
            <div className='px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col'>
              {children &&
                children.map((item) => (
                  <Link href={item.path} key={item.title} legacyBehavior>
                    <a className='py-1  hover:text-gray-900  text-white text-md'>
                      {item.title}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
