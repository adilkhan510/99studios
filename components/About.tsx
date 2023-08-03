import { FaBullseye } from 'react-icons/fa';

import { MdAccessTime, MdBorderAll } from 'react-icons/md';
import Container from './ui/Container';
import SectionHead from './ui/SectionHead';

export default function About() {
  return (
    <Container className="max-w-[90rem]">
      <SectionHead
        title="About Us"
        description="We are a dedicated team driven by passion and innovation."
        blue
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 md:space-y-20">
        <div className="relative bg-white shadow rounded-lg p-8 lg:p-16  transform hover:scale-105 duration-300 ease-in-out overflow-hidden space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center ">
            Our History
          </h2>
          <div className="absolute  flex items-center justify-center top-[-10%] left-[0%]">
            <FaBullseye
              className="xl:h-60 lg:w-60 text-indigo-200 opacity-90   "
              aria-hidden="true"
            />
          </div>
          <p className="text-md md:text-lg text-gray-600 leading-relaxed mx-auto max-w-2xl">
            We started our journey in 2023. Since then, we have worked with
            numerous clients, helping them to transform their businesses and
            drive growth. We are a team of passionate individuals who love what
            we do. We are strategists, designers, developers, writers, and
            marketers. Our goal is to create your business a success.
          </p>
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto timeline">
            <ul className="list-none space-y-6">
              <li className="flex items-center space-x-2">
                <MdAccessTime className="text-indigo-500 h-6 w-6" />
                <div>
                  <h4 className="font-semibold text-gray-900">2020</h4>
                  <p className="text-gray-600">Founded the agency</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <MdAccessTime className="text-indigo-500 h-6 w-6" />
                <div>
                  <h4 className="font-semibold text-gray-900">2020</h4>
                  <p className="text-gray-600">
                    First major client acquisition
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative bg-white shadow-2xl rounded-2xl p-6 sm:p-12 lg:p-16 transition-transform transform hover:scale-105 duration-300 ease-in-out overflow-hidden space-y-8">
          <div className="absolute  flex items-center justify-center top-[-10%] left-[85%]">
            <FaBullseye
              className="h-[10rem] w-[10rem] text-indigo-200 opacity-90 animate-spin-slow"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center z-10 ">
            Our Mission
          </h2>
          <p className="text-md md:text-lg text-gray-600 leading-relaxed mx-auto max-w-2xl">
            Our mission is to empower businesses with innovative solutions that
            drive growth and make a meaningful impact. We believe that by
            working together, we can make a difference. We are committed to
            delivering excellence in everything we do.
          </p>
        </div>
      </div>

      {/* <div className="my-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg md:text-xl text-indigo-600 font-semibold tracking-wide uppercase transform transition-all hover:scale-105">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-pulse">
            We offer a wide range of services to help your business grow.
          </p>
        </div>

        <div className="mt-10 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 items-start">
          <div className="flex">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg">
              <FaDev className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg leading-6 font-semibold text-gray-900">
                Web Design
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We design beautiful websites that are easy to use and navigate.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg ">
              <FaSearch className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg leading-6 font-semibold text-gray-900">
                SEO
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We will optimize your website for search engines.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg ">
              <FaMobileAlt className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg leading-6 font-semibold text-gray-900">
                Mobile Apps
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We build mobile apps that are fast, secure, and easy to use.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg ">
              <FaSearchDollar className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg leading-6 font-semibold text-gray-900">
                Marketting
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We help you reach your target audience and increase sales.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
}
