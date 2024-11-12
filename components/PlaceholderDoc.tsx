"use client"
import React from 'react'
import { Button } from './ui/button'
import {PlusCircleIcon} from 'lucide-react'
import { useRouter } from 'next/navigation'
function PlaceholderDoc() {
    const router=useRouter();
    const gotoUpload = () => {
      router.push("/dashboard/upload");
    };
  return (
    <div>
        <Button onClick={gotoUpload} className="flex flex-col items-center w-64 h-80 rounded-lg bg-gray-500 drop-shadow text-gray-300">
            <PlusCircleIcon className="h-16 w-16"/>
            <p>Add Document</p>
        </Button>
    </div>
  )
}

export default PlaceholderDoc