import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <hr className="my-12 w-3/4 mx-auto border-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 hover:from-blue-400 hover:to-blue-400 rounded-full" />
      <About />
      <hr className="my-12 w-3/4 mx-auto border-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 hover:from-blue-400 hover:to-blue-400 rounded-full" />
      <Skills />
      <hr className="my-12 w-3/4 mx-auto border-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 hover:from-blue-400 hover:to-blue-400 rounded-full" />
      <Projects />
      <hr className="my-12 w-3/4 mx-auto border-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 hover:from-blue-400 hover:to-blue-400 rounded-full" />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
