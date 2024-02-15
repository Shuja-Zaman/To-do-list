'use client'

import { AlignJustify, ListTodo } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { FunctionComponent } from "react";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {

    const [showList, setShowList] = useState(false);

    return (
        <>
            <nav className="bg-slate-300 flex items-center justify-between py-3 px-9">
          {/* start */}
          <div className="row">
            <ListTodo size={40} className="text-blue-500 bg-clip-text bg-gradient-to-r from-green-400 to-green-800"/>
            <h1 className="text-xl font-bold gradient-blue hidden md:block">MYTE</h1>
          </div>

          {/* end */}
          <div className="row gap-5">
            <Link className="link hidden md:block" href={'/'}>Home</Link>
            <Link className="link hidden md:block" href={'/about'}>About</Link>
            <Link className="link hidden md:block" href={'/contact'}>Contact</Link>
            <AlignJustify onClick={()=>{setShowList(!showList)}} size={40} className="hover:text-blue-500 hover:cursor-pointer md:hidden block"/>
          </div>
          
        </nav>

          {/* hamburger list */}
          {showList ? (<div className="transition-opacity duration-300 delay-100 ease-in-out col text-xl py-3 bg-slate-300 opacity-100 md:hidden">
            <Link className="link" href={'/'}>Home</Link>
            <Link className="link" href={'/about'}>About</Link>
            <Link className="link" href={'/contact'}>Contact</Link>
          </div>) : <div className="transition-opacity opacity-0"></div>}
        </>
    );
}
 
export default Navbar;