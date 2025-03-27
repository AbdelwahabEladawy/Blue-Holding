import logo from "../../../assets/images/logo.png";

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#000E22] text-white mt-[200px]  z-50">
      <div className=" px-6 md:px-24 py-8 flex flex-col  sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <Image 
            src={logo}
            alt="Abbott Logo" 
            width={100} 
            height={40}
            className="h-8 w-auto mb-5"
          />
        </div>
        
        <div className="text-sm text-start  sm:text-right">
          © 2025 Abbott. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}