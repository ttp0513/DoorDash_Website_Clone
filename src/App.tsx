
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import { Body } from "./sections/Body";
import { Selection } from "./sections/Selection";


function App() {

  return (
    <div>
    
    <Navbar />
    <main>
      <Hero />
      <Body />
      <Selection />
      <Footer />
    </main>
    </div>
  )
}

export default App
