
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import { Body } from "./sections/Body";


function App() {

  return (
    <div>
    
    <Navbar />
    <main>
      <Hero />
      <Body />
      <Footer />
    </main>
    </div>
  )
}

export default App
