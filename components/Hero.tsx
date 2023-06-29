import Container from './Container';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <Container>
      <div className='flex w-[1100px] h-[600px] justify-center items-center flex-col m-auto space-y-4'>
        <h1 className='text-8xl mb-10'>{title}</h1>
        <h2 className='text-md '>{subtitle}</h2>
        <p className='text-sm '>{description}</p>
      </div>
    </Container>
  );
}
