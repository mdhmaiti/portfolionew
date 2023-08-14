import { FC } from "react";
import { NavigationMenuDemo } from "@/components/navbar/menu";
import { ModeToggle } from "@/components/navbar/toggle-light-dark";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <nav className="flex justify-center items-center m-5">
      <div>
        <NavigationMenuDemo />
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
