import logo from "../../../assets/images/logo.png";

import Image from "next/image"
import { CircleUser } from "lucide-react"

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-[#002046]/80 backdrop-blur-sm px-6 md:px-24 py-5">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Image src={logo} width={120} height={40} alt="Logo" />
        </div>
        <CircleUser color="white" fill="gray" size={48} />
      </div>
    </div>
  )
}


