import React from 'react';
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function ServicePlan({ service }: { service: Service }) {
  return (
    <div className="relative p-6 m-2 rounded-lg overflow-hidden border-2 border-transparent shadow-lg transition-all transform hover:scale-105 hover:border-blue-600">
      <div className="absolute -top-1 -left-1 w-full h-full border-2 border-dashed border-blue-300 rounded-lg transform rotate-6"></div>
      <div className="relative z-10 text-center">
        <div className="text-6xl  my-4">{service.icon}</div>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-md md:text-lg text-gray-600 mb-4">
          {service.description}
        </p>
        <Link href="#" legacyBehavior>
          <a className="inline-block bg-blue-300 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-300 ease-in-out">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}
