import Experience from './sections/Experience';
import Education from './sections/Education';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollyTelling from './components/ScrollyTelling';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import useScrollAnimation from './hooks/useScrollAnimation';
import InteractiveBackground from './components/InteractiveBackground';
import './App.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      <InteractiveBackground />
      <Header />
      <main>
        <ScrollyTelling />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
