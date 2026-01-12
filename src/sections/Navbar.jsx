import { Button } from "@/components/Button";
import { useState, useEffect } from "react";

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        // when users scroll more than 50px, handleScroll functions returns true 
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []); 

  return (
    <nav className={`fixed top-0 right-0 left-0 z-20 transition-all duration-200 ${isScrolled ? "bg-white backdrop-blur border-none" : "bg-transparent px-3 py-2"}`}>
      <div className="mx-auto flex items-center justify-between px-3 py-2">
            
            <div className="w-40">
              <img className= {`${isScrolled ? "object-contain w-auto h-full" : "hidden"}`} src="DoorDash-Logo.png" alt="DoorDash-Logo"/> 
            </div>
            
            <div className="flex gap-2">
              <Button 
              variant="primary">
                <a href="https://identity.doordash.com/auth?client_id=1666519390426295040&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fhome%7C%7Cff19d86b-fb4f-4dab-89a1-9d1be06db851">
                Sign In </a>
                </Button>

              <Button 
              variant="secondary">
                <a href="https://identity.doordash.com/auth/user/signup?client_id=1666519390426295040&intl=en-US&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2Fhome%7C%7Cff19d86b-fb4f-4dab-89a1-9d1be06db851">
                Sign Up </a>
                </Button>
            </div>
      </div>
    </nav>
  );
};
