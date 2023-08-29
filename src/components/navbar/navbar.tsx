
import { NavigationMenuDemo } from "@/components/navbar/menu";
import { ModeToggle } from "@/components/navbar/toggle-light-dark";

function Navbar() {
  return (
 
      
      <nav className="flex justify-between mx-10 my-10 ">
      
        <NavigationMenuDemo />
      
  
      
        <ModeToggle />
      
    </nav>
   
    
  );
}

export default Navbar;
