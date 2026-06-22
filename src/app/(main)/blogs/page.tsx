import { PageHeader } from '@/components/accommodation/PageHeader'
import { blogs } from '@/constants/blogs'
import React from 'react'
import BlogCard from './components/BlogCard'

const BlogsPage = () => {
  return (
    <>
         <PageHeader
           title="CONTACT"
           breadcrumb={[
             { label: 'Home', href: '/' },
             { label: 'CONTACT', href: '/contact-us' },
           ]}
         />
   
       
   
   
         <section className="py-16 px-4 bg-white">
           <div className="max-w-300 mx-auto space-y-5 lg:px-4">
              <div className='max-w-3xl space-y-20'>
                  {
                    blogs?.map((item,index) => <BlogCard key={index} blog={item} />)
                  }
              </div>
           </div>
         </section>
   
       </>
  )
}

export default BlogsPage