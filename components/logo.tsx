import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FileHeart } from 'lucide-react';
import Image from 'next/image';


interface Props {
  href?: string
  className?: string;
}

export function Logo({ href = '/', className }: Props) {
  return (
    <Link href={href || "/"} className={cn("btn btn-ghost normal-case text-xl ml-4 flex items-center", className)}>
      <Image width={32} height={32} className='border rounded' alt='logo' src={'/logo.png'} />
      <h1 className={cn("text-2xl font-bold ml-2")}>
        SevenLabz
      </h1>
    </Link>
  )
}
