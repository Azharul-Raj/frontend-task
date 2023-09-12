import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import {Dispatch,SetStateAction} from 'react';
import {FiX} from 'react-icons/fi'
import { navItems } from '../../../data/data';

import {FiLogOut} from 'react-icons/fi'

interface sidebarProps{
    isOpen:boolean;
    setIsOpen:Dispatch<SetStateAction<boolean>>
}

function Sidebar({isOpen,setIsOpen}:sidebarProps) {
    const pathname=usePathname();
  return (
    <aside
    //   ref={sidebar}
      className={`absolute left-0 top-0 z-9999 rounded-lg flex h-screen w-[250px] flex-col overflow-y-hidden bg-gradient-to-b bg-[#8338E1] duration-300 ease-linear lg:static lg:translate-x-0 ${
        isOpen ? 'translate-x-0 z-10 backdrop-blur bg-[#8338E1] duration-300/30' : '-translate-x-full z-10'
      }`}>
        {/* cross Icon */}
        <div className="relative my-2 cursor-pointer lg:hidden">
          <div onClick={()=>setIsOpen(!isOpen)} className="absolute right-2 z-20 flex text-white bg-blue-700 rounded-full justify-center items-center p-2">
            <FiX/>
          </div>
        </div>
        {/* LOGO */}
        <div className="flex items-center justify-center space-x-2 pl-4">
          {/* <Image width={50} src={logo} alt='logo' /> */}
          <p className='text-xl font-bold text-white text-center'>Logo</p>
        </div>
        {/* MENU */}
        <div className="ml-8 mt-8">
          {/* NAV ITEM */}
          {
            navItems.map(({Icon,url,name},i)=>(
          <Link href={url} key={i} className={`flex items-center pl-2  py-3 cursor-pointer ${pathname===url?'bg-blue-500/90 text-white lg:bg-white/30 backdrop-blur':'text-gray-300'} rounded-tl-full rounded-bl-full space-x-2 my-2`}>
            <div className="ml-2 ">
            {Icon}
            </div>
            <h5>{name}</h5>
          </Link>
            ))
          }
          <Link href={'/'} className='flex items-center text-white pl-2 py-3 cursor-pointer space-x-2 '>
            <div className="ml-2">
              <FiLogOut/>
            </div>
            <h5>Logout</h5>
          </Link>
        </div>
      </aside>
  )
}

export default Sidebar;