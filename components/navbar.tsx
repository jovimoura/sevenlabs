'use client'

import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname()
  function handleCreateLabelWithUrl(url: string) {
    const path = url.replace('/app/', '').split('/');
    
    const lastSegment = path[path.length - 1];
    
    const words = lastSegment.split('-');
    
    const formattedWords = words.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    return formattedWords.join(' ');
  }
  return (
    <div className="flex items-center p-4 w-full border-b">
      <span className="font-waldenburg-ht text-lg text-dark font-semibold">{handleCreateLabelWithUrl(pathname)}</span>
    </div>
  )
}