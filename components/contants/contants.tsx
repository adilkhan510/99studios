import {
  FaChartLine,
  FaLightbulb,
  FaPen,
  FaPenNib,
  FaVideo,
  FaMobileAlt,
} from 'react-icons/fa';

const menuitems = [
  {
    title: 'Services',
    path: '/services',
    // children: [
    //   { title: 'Website Design', path: '/services/web-design' },
    //   { title: 'Digital Marketing', path: '/services/digital-marketing' },
    //   { title: 'SEO Services', path: '/services/seo' },
    //   { title: 'Custom Development', path: '/services/development' },
    // ],
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
    title: 'Contact',
    path: '/contact',
  },
];

const services = [
  {
    title: 'Web Design',
    description:
      'We design and develop beautiful, lightning fast, scalable, and marketing-focused websites tailored to grow your business.',
    icon: <FaLightbulb className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Branding',
    description:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    icon: <FaPenNib className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Marketing',
    description:
      'Increase your ROI through data-driven digital marketing services such as SEO to drive leads, and paid media to enhance performance.',
    icon: <FaChartLine className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Video Editing',
    description:
      "From ideation to scripting, pre-production to editing, we've got all your video production needs covered.",
    icon: <FaVideo className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Copywriting',
    description:
      "Our professional copywriting services can help scale your business's marketing needs without the costly overhead.",
    icon: <FaPen className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'App Development',
    description:
      'Our full-stack development team specializes in creating custom, scalable, and secure WordPress and Shopify applications.',
    icon: <FaMobileAlt className="w-12 h-12 text-blue-600" />,
  },
];

export { menuitems, services };
