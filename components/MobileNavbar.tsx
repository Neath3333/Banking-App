'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MobileNavbar = ({ user }: { user?: { firstName?: string; lastName?: string } }) => {
  const pathname = usePathname();

  return (
    <section className="md:hidden">
      <Sheet>
        <SheetTrigger aria-label="Open menu" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-[#FCFCFD]">
          <Image src="/icons/hamburger.svg" alt="menu" width={18} height={18} />
          Menu
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
            <Image src="/icons/logo.png" alt="Cabinet logo" width={28} height={28} />
            <span className="text-base font-semibold">CABINET</span>
          </div>

          <nav className="flex flex-col gap-1 p-2">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
              return (
                <Link
                  key={item.label}
                  href={item.route}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-gray-300 transition-colors ${isActive ? 'bg-bank-gradient text-white' : 'hover:bg-white/5'}`}
                >
                  <div className="relative size-5">
                    <Image src={item.imgURL} alt={item.label} fill className={isActive ? 'brightness-100 invert-0' : ''} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-gray-200 px-4 py-3 text-sm text-gray-600">
            Signed in as <span className="font-medium">{user?.firstName} {user?.lastName}</span>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavbar
