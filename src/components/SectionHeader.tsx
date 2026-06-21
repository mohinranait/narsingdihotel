import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
  className?: string;
  title: string;
  titleCss?: string;
  subTitle?: string;
  subTitleCss?: string;
  rightNode?: React.ReactNode,
}
const SectionHeader = ({ title, subTitle, rightNode, className,titleCss,subTitleCss }: Props) => {
  return (
    <div className={cn('flex justify-between mb-12 items-center', className)}>
      <div>
        <h3 className={cn('text-3xl md:text-4xl mb-2 font-bold text-center text-[#2d3e50]  uppercase',titleCss)}>{title}</h3>
        <p className={cn('text-gray-600 uppercase', subTitleCss)}>{subTitle}</p>
      </div>
      <div>
        {rightNode}
      </div>
    </div>
  )
}

export default SectionHeader