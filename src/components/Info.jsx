import '../styles/info.css';
import arrows from '../assets/arrows.webp'
import TextSlider from './TextSlider';
import Belt from './Belt';

const Info = () => {

  return (
    <div className='info' id='info'>
        <aside>
            <Belt className= "belt"/>
            <div className='info-arrows'>
                <div className='img-container'>
                    <img src={arrows} alt="arrow" data-aos="fade-up"/>
                </div>
            </div>
        </aside>
        <article>
            <div className='info-title' data-aos="fade-up">
                <h2>I work with</h2>
                <TextSlider />
                <h2>to achieve the goal.</h2>
            </div>
            <div className='info-text' data-aos="fade-up">
                <p>In order to create interactions with your potential customers and improve your chances of closing sales, you need to provide a website with clear information and an attractive, unique design.</p>
                <p>A dedicated front-end developer brings creativity and customization to every project.</p>
            </div>
            <div className='info-btns' data-aos="fade-up">
                <a href="https://github.com/ArielMarno">GITHUB</a>
                <a href="https://www.linkedin.com/in/arielmarchesano/">LINKEDIN</a>
                <a href="https://wa.link/4aj2dj">WHATSAPP</a>
            </div>
        </article>
    </div>
  )
}

export default Info