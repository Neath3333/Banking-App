'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
   <section className='glass-morphism-dark w-64 min-h-screen border-r border-gray-200'>
    <nav className='flex flex-col h-full p-6'>
        {/* Logo */}
        <Link
        href={'/'}
        className='mb-8 flex items-center gap-3 group'>
        <div className="relative">
          <Image
           src = "/icons/logo.png"
           alt='Cabinet Logo'
           width={40}
           height={40}
           className="size-10 transition-transform duration-300 group-hover:scale-110"
           />
          <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
        </div>
         <h1 className='text-2xl font-bold text-white tracking-tight'>CABINET</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 space-y-2">
        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return(
                <Link
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 transition-all duration-200 group",
                  isActive
                    ? "bg-gradient-primary text-white shadow-medium"
                    : "hover:bg-white/10 hover:text-white hover:translate-x-1"
                )}
                key={item.label}
                href={item.route}>
                    <div className='relative size-5'>
                    <Image
                     src={item.imgURL}
                     alt={item.label}
                     fill
                     className={cn(
                       'transition-all duration-200',
                       {'brightness-0 invert': isActive,
                        'brightness-0 invert opacity-70 group-hover:opacity-100': !isActive
                      }
                    )}
                   />
                    </div>
                    <span className="font-medium">{item.label}</span>
                </Link>
            )
            })}
        </div>

        {/* User Section */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                {user?.firstName?.[0] || 'U'}{user?.lastName?.[0] || 'S'}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-gray-400 text-sm truncate">
                Premium Account
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2024 Cabinet. All rights reserved.
          </p>
        </div>
    </nav>
   </section>
  )
}

export default SideBar
