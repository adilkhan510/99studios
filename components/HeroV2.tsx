import Image from 'next/image';
import Link from 'next/link';
import heroImage from '/public/hero.png';
import Container from './Container';

export default function HeroV2() {
  return (
    <Container>
      <div className='grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24'>
        <div className='py-6 md:order-1 hidden md:block'>
          <Image
            src={heroImage}
            alt='in the air'
            width={600}
            height={450}
            loading='eager'
          />
        </div>
        <div className=''>
          <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-blue-200 '>
            Elevate Your
            <br />
            Business With Us
          </h1>
          <p className='text-lg mt-4 text-slate-600 min-w-2xl'>
            With our deep expertise in modern web technologies, we&apos;re here
            to elevate your online presence. We enhance your visibility and
            stimulate your growth, propelling your business into the digital
            future.
          </p>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 text-lg'>
            <Link
              href='#'
              className='text-black-200 rounded-md p-4 font-semibold bg-white  hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105  '
            >
              Start your project
            </Link>
            <Link
              href='#'
              className='text-black-200 rounded-md p-4 bg-blue-300 font-semibold shadow-md hover:bg-blue-400 
              hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 '
            >
              View our portfolio
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
