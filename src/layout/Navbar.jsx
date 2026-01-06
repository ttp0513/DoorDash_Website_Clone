import { Button } from "@/components/Button";
import { useState, useEffect } from "react";

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        // when users scroll more than 50px, handleScroll functions returns true 
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []); 

  return (
    <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-600 ${isScrolled ? "bg-white backdrop-blur border-none" : "bg-transparent px-3 py-2"}`}>
      <div className="max-w-content mx-auto flex items-center justify-between px-3 py-2">
            <div className="w-40">
              <img className= {`${isScrolled ? "object-contain w-auto h-full" : "hidden"}`} src="DoorDash-Logo.png" alt="DoorDash-Logo"/> 
            </div>
            <nav className="flex gap-2">
            <Button > Sign In</Button>
            <Button variant="secondary" className="hover:bg-transparent">Sign Up</Button>
            </nav>
      </div>
    </header>
  );
};
