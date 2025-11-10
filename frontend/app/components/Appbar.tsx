// app/components/Navbar.tsx (or src/components/Navbar.tsx)

"use client";

// import div from "next/div";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Router = useRouter();
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-orange-500">
            <div ><span className="text-black">_</span>Mapier<span className="text-black">_</span></div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <div  className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Home
            </div>
            <div onAbort={()=>{
                Router.push("/dashboard")
            }} className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Dashboard
            </div>
            <div className="text-gray-700 hover:text-orange-500 cursor-pointer" >
              Pricing
            </div>
            <div  className="text-gray-700 hover:text-orange-500    cursor-pointer">
              Contact
            </div>
            <button onClick={()=>{
                Router.push("/signup")
            }} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 cursor-pointer transition">
              Sign Up
            </button>
          </div>
          </div>
        </div>
    </nav>
  );
}
