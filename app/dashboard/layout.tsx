import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'
import Header from './../../components/Header'
function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
      <ClerkLoaded>
        <div className="flex flex-col flex-1 h-screen">
          <Header/>
          <main className="flex-1  overflow-y-auto ">
            {children}
          </main>
          
        </div>
      </ClerkLoaded>
    
  )
}

export default DashboardLayout
