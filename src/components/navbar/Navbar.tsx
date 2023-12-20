import Link from "next/link";


import {  Home, Book,  FolderOpenDot } from "lucide-react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { Button } from "../ui/button";

import MobMenu from "./MobMenu";
import { ModeToggle } from "../ui/LightDarkToggle";




const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

const navItems = [
  { id: 1, title: "Home", url: "/#Home" },
  { id: 2, title: "Projects", url: "/#Projects" },
  { id: 3, title: "About", url: "/#About" },
  
];

const Navbar = () => {
  return (
    <nav className=" p-5 w-full fixed top-0 left-0 z-40 ">
      <div className=" flex items-center justify-between w-full ">
        <div className=" flex flex-row items-center justify-start space-x-10 w-fit">
          <Link href="/" className="flex flex-row  items-center space-x-6">
            <Image
              className="rounded-full "
              src="/gmail-linkdin-twitter.jpg"
              height={40}
              width={40}
              priority={true}
              alt="Logo"
            />
            <span className={`   text-md md:text-xl font-black glow `}>Medhashis Maiti</span>
          </Link>
          
        <ModeToggle />
      
          
          
        </div>
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              className=" text-lg font-medium  "
              href={item.url}
              key={item.id}
            >
              <div className="flex flex-row  justify-center items-center space-x-5">
              
                {item.title === "Home" && <Home className='glow'/>}
                {item.title === "About" && <Book className='glow' />}
                {item.title === "Projects" && <FolderOpenDot className='glow'/> }
                <Button
                  className="  text-xl font-medium shadow-lg shadow-sky-500/50 "
                  variant="ghost"
                >
                  {item.title}
                </Button>
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:hidden ">
          
          <MobMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;