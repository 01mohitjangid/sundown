import './App.css';

function App() {
  return (
    <div>xxxxxx
    <div id="main">
      <div id="page1">
        <nav>
          <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
          <div id="nav-part2">
            <h4><a>Work</a></h4>
            <h4><a>Studio</a></h4>
            <h4><a>Contact</a></h4>
          </div>
          <h3>Menu</h3>
        </nav>
        <div id="center">
          <div id="left">
            <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and
              environments.</h3>
          </div>
          <div id="right">
            <h1>SPACES <br />
              THAT <br />
              INSPIRE</h1>
          </div>
        </div>
        <div id="hero-shape">
          <div id="hero-1" />
          <div id="hero-2" />
          <div id="hero-3" />
        </div>
        <video autoPlay loop muted src="./video.mp4" />
      </div>
      <div id="page2">
        <div id="moving-text">
          <div className="con">
            <h1>EXPERIENCES</h1>
            <div id="gola" />
            <h1>CONTENT</h1>
            <div id="gola" />
            <h1>ENVIRONMENTS</h1>
            <div id="gola" />
          </div>
          <div className="con">
            <h1>EXPERIENCES</h1>
            <div id="gola" />
            <h1>CONTENT</h1>
            <div id="gola" />
            <h1>ENVIRONMENTS</h1>
            <div id="gola" />
          </div>
          <div className="con">
            <h1>EXPERIENCES</h1>
            <div id="gola" />
            <h1>CONTENT</h1>
            <div id="gola" />
            <h1>ENVIRONMENTS</h1>
            <div id="gola" />
          </div>
        </div>
        <div id="page2-bottom">
          <h1>We are a group of design- driven, goal-focused creators,  producers, and designers who
            believe that the details  make all the difference.</h1>
          <div id="bottom-part2">
            <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="" />
            <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas
              into reality. We’re here to partner with you through every step of the process and know that
              relationships are the most important things we build.</p>
          </div>
        </div>
        <div id="gooey">
        </div>
      </div>
      <div id="page3">
        <div id="elem-container">
          <div id="elem1" className="elem" data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>Makers Studio HOI</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8">
            <div className="overlay" />
            <h2>50th Anniversary</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>NYFW Popup</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>Air Force 1 2021</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>SOHO NYC</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1700601437860-e66da79cf6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>SOHO 2023</h2>
          </div>
          <div className="elem" data-image="https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D">
            <div className="overlay" />
            <h2>Play New Kidvision</h2>
          </div>
        </div>
      </div>
      <div id="page4">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {/* <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div> */}
          </div>
        </div>
      </div>
      <div id="page5">
      </div>
      <div id="full-scr">
        <div id="full-div1">
        </div>
      </div>
    </div>
    <div id="footer">
      <div id="footer-div">
      </div>
      <h1>Sundown</h1>
      <div id="footer-bottom">
      </div>
    </div>
  </div>
  )
}<link src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"> </link>

export default App;
