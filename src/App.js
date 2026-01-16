
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroShape from './components/HeroShape';
import HeroVideo from './components/HeroVideo';
import MovingText from './components/MovingText';
import Page2Bottom from './components/Page2Bottom';
import ProjectList from './components/ProjectList';
import DesignExecution from './components/DesignExecution';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import FullScreenDiv from './components/FullScreenDiv';
import Footer from './components/Footer';



function App() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
          setScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create a parallax slide-up effect
  // Content moves up faster than scroll (1.2x), creating visible sliding motion
  // This makes content appear to slide up from below as you scroll down
  const parallaxOffset = scrollY * 1.2; // 120% - content moves up faster than scroll

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <div 
        ref={containerRef}
        id="main" 
        className="page-slide-container"
        style={{
          transform: `translate3d(0, -${parallaxOffset}px, 0)`,
          willChange: 'transform',
          position: 'relative'
        }}
      >
        <div id="page1">
          <Navbar />
          <Hero />
          <HeroShape />
          <HeroVideo />
        </div>
        <div id="page2">
          <MovingText />
          <Page2Bottom />
          <div id="gooey"></div>
        </div>
        <div id="page3">
          <ProjectList />
          <div className="mt-10">
            <DesignExecution />
          </div>
          <WhoWeWorkWith />
        </div>
        <FullScreenDiv />
        <Footer />
      </div>
    </div>
  );
}

export default App;
