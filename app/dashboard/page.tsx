
import Documents from '@/components/Documents'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-full max-w-7xl mx-auto'>
        
      <h1 className='text-2xl p-5 text-gray-900'>My Docs</h1>

      <Documents/>
    </div>
  )
}

export default Dashboard
