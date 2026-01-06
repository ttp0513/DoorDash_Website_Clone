
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { Foot } from "./sections/Foot";
import { Body } from "./sections/Body";


function App() {

  return (
    <div>
    
    <Navbar />
    <main>
      <Hero />
      <Body />
      <Foot />
    </main>
    </div>
  )
}

export default App
