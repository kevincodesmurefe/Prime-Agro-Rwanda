
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import WhatWeDo from "./components/WhatWeDo";
import VisitBooking from "./components/VisitBooking";
import Footer from "./components/Footer"

function App() {
  return (
    <main id="home" className="min-h-screen bg-stone-200 ">
      <Navbar />
       <Hero />
      <About />
      <Gallery />
      <WhatWeDo/>
      <VisitBooking />
      <section id="about" className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Prime Agro Rwanda
        </h1>
        <p className="mt-4 text-gray-700">
          Rooted in Rwanda. Growing with a purpose.
        </p>
      </section>
      <Footer/>
    </main>
    
  );
}

export default App;
