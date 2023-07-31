import Image from 'next/image';

const HeroImg = () => {
  return (
    <div className='[perspective:2000px]'>
      <div className='  [transform:rotateX(1deg)] bg-hero-gradient '>
        <Image
          src='/hero.png'
          height={800}
          width={1200}
          alt='hero'
          className='z-20 w-auto h-auto  rounded-2xl shadow-2xl '
        />
      </div>
    </div>
  );
};

export default HeroImg;
