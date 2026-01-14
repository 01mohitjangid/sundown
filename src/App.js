
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
          <WhoWeWorkWith />
        </div>
        <FullScreenDiv />
      </div>
      <Footer />
    </div>
  );
}

export default App;
