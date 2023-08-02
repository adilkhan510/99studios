import Container from '@/components/ui/Container';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/Hero';
import HeroImg from '@/components/HeroImg';
import HeroV2 from '@/components/HeroV2';
import Cta from '@/components/cta';
import FeatureList from '@/components/features';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-radial-gradient'>
      {/* <Hero
          title='99studios'
          subtitle='Crafting Digital Experiences for tomorrow'
          description='We are a team of passionate designers and developers who love to create awesome websites and apps.'
        /> */}
      <HeroV2 />
      <FeatureList />
      <Cta />
      <Footer />
    </div>
  );
}
