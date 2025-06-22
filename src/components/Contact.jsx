import '../styles/contact.css'

import arm from '../assets/arm.webp';
import armrsp from '../assets/armrsp.webp';
import wsp from '../assets/icons/wsp.webp';
import lkd from '../assets/icons/lkd.webp';
import gith from '../assets/icons/gith.webp';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <aside>
            <picture data-aos="fade-up">
                <source media="(min-width: 768px)"
                srcSet={arm} />
                <img src={armrsp} alt="robot arm" />
            </picture>
        </aside>
        <div className='contact-content'>
            <div className='content'>
                <h2 data-aos="fade-up">Marchesano Ariel</h2>
                <h4 data-aos="fade-up">FRONTEND DEVELOPER</h4>
                <h5 data-aos="fade-up">arielmarno@outlook.com</h5>
                <div className='content-icons'>
                    <a href="https://www.linkedin.com/in/arielmarchesano/" className='contact-icon'><img src={lkd} alt="LinkedIn" /></a>
                    <a href="https://github.com/ArielMarno" className='contact-icon-git'><img src={gith} alt="GitHub" /></a>
                    <a href="https://wa.link/4aj2dj" className='contact-icon'><img src={wsp} alt="WhatsApp" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact