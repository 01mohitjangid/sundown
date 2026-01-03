
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroShape from './components/HeroShape';
import HeroVideo from './components/HeroVideo';
import MovingText from './components/MovingText';
import Page2Bottom from './components/Page2Bottom';
import ProjectList from './components/ProjectList';
import DesignExecution from './components/DesignExecution';
import SwiperSection from './components/SwiperSection';
import Page5 from './components/Page5';
import FullScreenDiv from './components/FullScreenDiv';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <div id="main">
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
        </div>
        <div id="page4">
          <SwiperSection />
        </div>
        <Page5 />
        <FullScreenDiv />
      </div>
      <Footer />
    </div>
  );
}

export default App;
