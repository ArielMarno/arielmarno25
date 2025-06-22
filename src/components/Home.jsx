import "../styles/home.css";
import Navbar from "./Navbar";

import robot from '../assets/robot.webp';
import plus from '../assets/plus.webp';
import year from '../assets/025.webp';
const Home = () => {

  return (
    <div className='home'>
        <Navbar />
        <main>
          <div className="dev">
            <h1>dev.</h1>
            <div className="dev-img">
              <img src={year} alt="year" />
            </div>
          </div>
          <aside>
            <div className="home-content">
              <div className="web-develop">
                <h4>WEB DEVELOPMENT</h4>
                <p>In today's digital landscape, developing a creative, <br /> attractive, and functional <br /> website makes all the difference.</p>
                <a href="#contact" className="rsp-cta"><img src={plus} alt="plus" /></a>
              </div>
              <div className="front-end">
                <h2>FRONT END<br />DEVELOPER</h2>
              </div>
            </div>
            <div className="home-cta">
              <a href="#contact"><img src={plus} alt="plus" /></a>
            </div>
            <div className="robot">
              <img src={robot} alt="robot"/>
            </div>
          </aside>
        </main>
    </div>
  )
}

export default Home