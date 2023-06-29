import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <Hero
          title='99studios'
          subtitle='Crafting Digital Experiences for tomorrow'
          description='We are a team of passionate designers and developers who love to create awesome websites and apps.'
        />
      </main>
    </div>
  );
}
