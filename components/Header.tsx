import Link from 'next/link';
import Container from './Container';
import logo from '@/public/svgs/logo.svg';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className='fixed top-0 left-0 w-full  '>
      <Container className='flex h-[var(--navigation-height)] '>
        <nav className='flex  items-center  border-b border-transparent-white  w-full'>
          <Link href='/'>
            <Image src={logo} height={64} width={64} alt='logo' />
          </Link>
          <ul className='ml-auto flex space-x-5 [&_a]:text-xs '>
            <li>
              <Link className='ml-auto' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='ml-auto' href='/'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
