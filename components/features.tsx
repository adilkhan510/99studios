import {
  BiBriefcase,
  BiWindowAlt,
  BiData,
  BiBot,
  BiFileFind,
  BiUser,
} from 'react-icons/bi';
import Container from './ui/Container';

const features = [
  {
    title: 'Customized Solutions',
    description:
      'Whether you need a single-page site or a complex web app, we tailor our solutions to fit your unique needs.',
    icon: <BiBriefcase size={32} />, // Increased icon size here
  },
  {
    title: 'Performance First',
    description:
      'Our web solutions are crafted with performance in mind, ensuring fast, seamless experiences for your users.',
    icon: <BiWindowAlt size={32} />,
  },
  {
    title: 'Interactive & Engaging',
    description:
      'We build web solutions that engage and delight users, turning visitors into customers.',
    icon: <BiData size={32} />,
  },
  {
    title: 'Wide Range of Technologies',
    description:
      'We utilize a diverse array of technologies to ensure that your website is cutting-edge and future-proof.',
    icon: <BiBot size={32} />,
  },
  {
    title: 'SEO Optimized',
    description:
      'Our websites are SEO optimized to help you rank higher in search results and attract more organic traffic.',
    icon: <BiFileFind size={32} />,
  },
  {
    title: 'Community Support',
    description:
      'We value community and believe in growing together. Our clients become part of our network, with support every step of the way.',
    icon: <BiUser size={32} />,
  },
];

const FeatureList = () => {
  return (
    <Container className=' mt-20'>
      <div className='mt-16 md:mt-0 mx-auto '>
        <h2 className='text-5xl lg:text-5xl font-bold lg:tracking-tight'>
          Empowering Your Digital Journey
        </h2>
        <p className='text-lg mt-4 text-slate-600'>
          We provide a comprehensive suite of web services. Our focus is not
          just on building websites, but on crafting digital experiences.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16'>
        {features.map((item) => (
          <div className='flex gap-4 items-start' key={item.title}>
            <div className='mt-1 bg-black rounded-full  p-2 shrink-0 flex items-center justify-center'>
              {item.icon}
            </div>
            <div>
              <h3 className='font-semibold text-lg text-blue-400'>
                {item.title}
              </h3>
              <p className='text-slate-500 mt-2 text-sm leading-relaxed  '>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureList;
