import { IBlog } from '@/constants/blogs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  blog: IBlog;
}
const BlogCard = ({ blog }: Props) => {
  const { description, id, images, title } = blog;
  return (
    <div>
      <div>
        <Link href={`/blogs/${id}`}>
          <Image src={images[0]} width={800} height={300} alt='image' className='max-h-100 object-cover rounded-md' />

        </Link>
      </div>
      <div className='space-y-4 pt-6'>
       <Link  href={`/blogs/${id}`} className='inline-flex'>
        <h4 className='text-2xl text-gray-800'>{title}</h4></Link>
        <p className='text-gray-600'>{description}</p>
        <Link  href={`/blogs/${id}`} className='py-2 uppercase px-4 bg-[#A70F2E] inline-flex text-white'>
          More Details
        </Link>
      </div>
    </div>
  )
}

export default BlogCard