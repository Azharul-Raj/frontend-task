'use client'
import { useState,useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import DashboardHeader from '../components/Dashboard/DashboardHeader';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMount,setIsMount]=useState(false)
  const [isOpen,setIsOpen]=useState(false);
  
  useEffect(()=>{
    setIsMount(true)
  },[])
  if(!isMount) return null
  return (
    <section className='h-screen flex bg-gray-100'>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* Sidebar */}
      <div className="ml-0 lg:ml-5 flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        {children}
      </div>
    </section>
  )
}
