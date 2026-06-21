import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props= {
  className?:string;
}
const Logo = ({className}:Props) => {
  return (
    <Link href="/" className={cn("flex flex-col gap-1", className)}>
      <Image width={150} height={100} src={'https://narsingdihotel.com/wp-content/uploads/2024/09/narsingdi-hotel-2.jpg'} alt='Logo' />
    </Link>
  )
}

export default Logo