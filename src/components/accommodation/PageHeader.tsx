'use client'

import Link from 'next/link'

interface PageHeaderProps {
  title: string
  breadcrumb?: Array<{ label: string; href: string }>
}

export function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://www.hotelthecoxtoday.com/images/breadcrumb.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8a4a6b]/60"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">{title}</h1>

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex gap-2 text-white text-sm">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
                {index < breadcrumb.length - 1 && <span>/</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
