import Link from 'next/link';
import DropdownComponent from './Dropdown';
import Container from './Container';

const menuitems = [
  {
    title: 'Services',
    path: '#',
    children: [
      { title: 'Website Design', path: '/services/web-design' },
      { title: 'Digital Marketing', path: '/services/digital-marketing' },
      { title: 'SEO Services', path: '/services/seo' },
      { title: 'Custom Development', path: '/services/development' },
    ],
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Our Blog',
    path: '/blog',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export default function Navbar() {
  return (
    <Container>
      <header className='flex flex-col lg:flex-row justify-between items-center my-5 px-4 lg:px-0 container mx-auto'>
        <div className='flex w-full lg:w-auto items-center justify-between'>
          <Link href='/' className='text-lg'>
            <span className='font-bold text-slate-800'>99</span>
            <span className='text-slate-500'>studios</span>
          </Link>
          {/* Menu Icon should be replaced by a proper responsive menu solution */}
          <div className='block lg:hidden'>
            <span className='w-4 h-4 text-gray-800'>MenuIcon</span>
          </div>
        </div>
        <div className='hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0'>
          <ul className='flex flex-col lg:flex-row lg:gap-3 text-md'>
            {menuitems.map((item, index) => (
              <>
                {item.children ? (
                  <DropdownComponent
                    key={item.title}
                    title={item.title}
                    lastItem={index === menuitems.length - 1}
                  >
                    {item.children}
                  </DropdownComponent>
                ) : (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className='flex lg:px-3 py-2 text-black hover:text-gray-900 '
                    >
                      {item.title}
                    </Link>
                  </li>
                )}
              </>
            ))}
          </ul>
          <div className='lg:hidden flex items-center mt-3 gap-4'>
            <Link href='#' className='block text-md text-gray-500'>
              Client Login
            </Link>
            <Link href='#' className='block text-md text-blue-600'>
              Get a Quote
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          <Link href='#' className='text-md text-blue-600'>
            Client Login
          </Link>
          <Link href='#' className='text-md text-blue-600'>
            Get a Quote
          </Link>
        </div>
      </header>
    </Container>
  );
}
