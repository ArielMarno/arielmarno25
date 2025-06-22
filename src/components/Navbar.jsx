import "../styles/navbar.css";
import { useState } from "react";
import Menu from './Menu';
const Navbar = () => {

    //establecer el opuesto cuando se identifica si esta abierto el menu
    const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
    //booleano para apertura y cierre del menu desplegable al hacer click en los links del navegador
    const handleLinkClick = () => {
      setIsOpen(false);
    };

  return (
    <div className='navbar'>
        <main>
            <div className='navbar-name'>
                <h4>Marchesano <br />Ariel</h4>      
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#info" onClick={handleLinkClick}>INFO</a>
                <a href="#proyects" onClick={handleLinkClick}>PROYECTS</a>
                <section>
                    <a href="https://marchesanoariel.com.ar/">en</a>
                    <p>/</p>
                    <a href="https://es.marchesanoariel.com.ar/">es</a>
                </section>
            </nav>
            <div className='burguer'>
                <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
            </div>
        </main>
    </div>
  )
}

export default Navbar