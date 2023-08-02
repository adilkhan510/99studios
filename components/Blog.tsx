import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from './ui/Container';
import SectionHead from './SectionHead';

const publishedBlogEntries = [
  {
    title: 'How to Build a Startup',
    slug: 'how-to-build-a-startup',
    category: 'Startup',
    author: 'John Doe',
    publishDate: '2021-01-01',
    image: {
      src: '/blog/how-to-build-a-startup.png',
      alt: 'How to Build a Startup',
    },
  },
  {
    title: 'How to Build a Startup',
    slug: 'how-to-build-a-startup',
    category: 'Startup',
    author: 'John Doe',
    publishDate: '2021-01-01',
    image: {
      src: '/blog/how-to-build-a-startup.png',
      alt: 'How to Build a Startup',
    },
  },
];

export default function Blog() {
  return (
    <Container>
      <SectionHead
        title='Our Blog'
        description='We write about building startups and thoughts going on our mind.'
      />
      <div className='mt-16'>
        <ul className='grid gap-16 max-w-4xl mx-auto'>
          {publishedBlogEntries.map((blogPostEntry, index) => (
            <li key={blogPostEntry.slug}>
              <a href={`/blog/${blogPostEntry.slug}`}>
                <div className='grid md:grid-cols-2 gap-5 md:gap-10 items-center'>
                  <Image
                    src={blogPostEntry.image.src}
                    alt={blogPostEntry.image.alt}
                    width={800}
                    height={450}
                    className='rounded-md'
                  />
                  <div>
                    <span className='text-blue-400 uppercase tracking-wider text-sm font-medium'>
                      {blogPostEntry.category}
                    </span>

                    <h2 className='text-3xl font-semibold leading-snug tracking-tight mt-1 '>
                      {blogPostEntry.title}
                    </h2>

                    <div className='flex gap-2 mt-3'>
                      <span className='text-gray-400'>
                        {blogPostEntry.author}
                      </span>
                      <span className='text-gray-400'>• </span>
                      <time
                        className='text-gray-400'
                        dateTime={new Date(
                          blogPostEntry.publishDate
                        ).toISOString()}
                      >
                        {new Date(blogPostEntry.publishDate).toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
