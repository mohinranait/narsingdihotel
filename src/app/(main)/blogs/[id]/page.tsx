import { PageHeader } from '@/components/accommodation/PageHeader';
import { blogs } from '@/constants/blogs';
import ImageCarosel from './components/ImageCarosel';
import SectionHeader from '@/components/SectionHeader';

const BlogDetailsPage = async ({ params }: { params: { id: string | number } }) => {
  const { id } = await params;


  const blog = blogs.find(blog => blog.id === Number(id));


  if (!blog) return;


  return (
    <>
      <PageHeader
        title={`${blog?.title}` || "CONTACT"}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog Details', href: `/blogs/${blog?.id}` || '/' },
        ]}
      />




      <section className="py-16 px-4 bg-white">
        <div className='max-w-300 mx-auto'>

          <SectionHeader
            title={`${blog?.title}`}
            className='mb-0'
          />
        </div>
        <div className="max-w-300 mx-auto space-y-5 lg:px-4">
          <ImageCarosel images={blog?.images} />
        </div>

        <div className='max-w-300 mx-auto text-gray-800'>
          <p>{blog?.description}</p>
        </div>
      </section>

    </>
  )
}

export default BlogDetailsPage