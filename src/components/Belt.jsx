import '../styles/belt.css';
import tech from '../assets/technologies.webp';
import techrsp from '../assets/technologies-rsp.webp';

const Belt = () => {
  return (
    <div className='belt'>
        <div className='tech'>
            <img src={tech} alt="technologies" />
            <img src={tech} alt="technologies" />
            <img src={tech} alt="technologies" />
            <img src={tech} alt="technologies" />
            <img src={tech} alt="technologies" />
            <img src={tech} alt="technologies" />
        </div>
        <div className='tech-rsp'>
            <img src={techrsp} alt="technologies" />
            <img src={techrsp} alt="technologies" />
            <img src={techrsp} alt="technologies" />
            <img src={techrsp} alt="technologies" />
            <img src={techrsp} alt="technologies" />
            <img src={techrsp} alt="technologies" />
        </div>
    </div>
  )
}

export default Belt