'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user }: SiderbarProps) => {
    const pathname = usePathname();
  return (
   <section className='sidebar'>
    <nav className='flex flex-col gap-4'>
        <Link 
        href={'/'}
        className='mb-12 gap-2 items-center cursor-pointer flex'>
        <Image
         src = "/icons/logo.png"
         alt='Cabitnet Logo'
         width={34}
         height={34} 
         className="size-[24px] max-xl:size-14"
         />
         <h1 className='sidebar-logo'>Cabitnet</h1>
        </Link>
        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route|| pathname.startsWith(`${item.route}/`);
            return(
                <Link
                className={cn("sidebar-link",{"bg-bank-gradient" :isActive})} 
                key={item.label}
                href={item.route}>
                    <div className='relative size-6'>
                    <Image
                     src={item.imgURL}
                     alt={item.label}
                     fill
                     className={cn({'brightness-[3] invert-0': isActive
                    })}
                   />
                    </div>
                    {item.label}
                </Link>         
            )
            })}
            USER
 
            
    </nav>
    FOOTER
   </section>
  )
}

export default SideBar