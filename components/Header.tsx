"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";
import {SignedIn , UserButton} from '@clerk/nextjs';
import { Button } from "@/components/ui/button"
import { FilePlus2, FileUp, Receipt } from 'lucide-react';
function Header() {
    const router = useRouter();
    const goToBilling = () => {
      router.push("/dashboard/billing");
    };
  return (
    <div className='flex flex-row items-center justify-between bg-white shadow-sm p-5 border-black space-x-2'>
        <Link href="/dashboard" className="text-xl hidden md:flex flex-row">
            <span className="text-blue-700"> PDF Logo</span>
        </Link>
        <div className="flex flex-row justify-end gap-5 items-center">

        <Link href="/dashboard/upload" className="flex flex-row gap-1 text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all">
            <FilePlus2/> <p className="hidden md:flex">Upload</p>
        </Link>
        <Link href='dashboard/billing' className="flex flex-row gap-1 text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all">
            <Receipt /> <p className="hidden md:flex">Billing</p> 
        </Link>
        <div className='flex flex-row items-center text-sm font-medium hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-110 transition-all'>
            <SignedIn>    
                <UserButton/>
            </SignedIn>
        </div>
        </div>
    </div>
  )
}

export default Header
