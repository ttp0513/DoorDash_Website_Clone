import { Button } from "@/components/Button";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-white/90 backdrop-blur border-none">
      <div className="max-w-content mx-auto flex items-center justify-between px-3 py-2">
            <div className="w-40">
              <img className= "w-full object-contain" src="DoorDash-Logo.png" alt="DoorDash-Logo"/> 
            </div>
            <div className="flex gap-2">
            <Button > Sign In</Button>
            <Button variant="secondary" className="hover:bg-transparent">Sign Up</Button>
            </div>
      </div>
    </header>
  );
};
