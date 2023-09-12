"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image';

import avatar from '../../../assets/avater.png'
import notification from '../../../assets/Notfiication.svg'
import message from '../../../assets/Messages.svg'
import chevronDown from '../../../assets/chevron.svg'
import search from '../../../assets/search.svg';

interface HeaderProps{
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

function DashboardHeader({isOpen,setIsOpen}:HeaderProps) {
  return (
    // <header className='sticky top-0 flex bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-400 z-50'>
    <header className=' bg-white rounded-lg'>
        <div className="flex justify-between mx-2 md:justify-around items-center py-2">
            {/* HAMBURGER ICON */}
                <div onClick={()=>setIsOpen(!isOpen)} className="space-y-1 mr-3 cursor-pointer lg:hidden">
                    <div className="h-0.5 w-5 bg-white"></div>
                    <div className="h-0.5 w-5 bg-white"></div>
                    <div className="h-0.5 w-5 bg-white"></div>
                </div>
            {/* HAMBURGER ICON */}
            <div className="">
            <form className='lg:w-[600px]' action="">
              <div className="relative">
                <div className="absolute top-3 left-1">
                  <Image width={18} src={search} alt='search'/>
                </div>
              <input className='focus:outline-none py-2 pl-8 rounded-lg w-[80%] md:w-full' placeholder='Search here...' type="text" name="" id="" />
              </div>
            </form>
            </div>
            {/* PROFILE */}
        <div className="flex justify-center items-center space-x-3">
          <div className="relative">
            {/* <div className="absolute bg-red-600 rounded-full right-0 -top-1">
              <p className='px-0.5 text-white text-xs'>9</p>
            </div> */}
            <Image src={notification} alt='notification'/>
          </div>
          <div className="relative">
            {/* <div className="absolute bg-red-600 rounded-full right-0 -top-1">
              <p className='px-0.5 text-white text-xs'>9</p>
            </div> */}
            <Image src={message} alt='message'/>
          </div>
          {/* avatar */}
          <div className="flex">
            <Image className='rounded-full' width={50}  src={avatar} alt='avatar'/>
          </div>
          {/* chevron */}
          <div className="">
            <Image src={chevronDown} alt='arrow-down'/>
          </div>
        </div>
        </div>
    </header>
  )
}

export default DashboardHeader;