import '../styles/proyects.css';
import { useState } from 'react';

import caysa from '../assets/proyects/caysa.webp';
import agro from '../assets/proyects/agro.webp';
import zarq from '../assets/proyects/zarquitectura.webp';
import sf from '../assets/proyects/sunflower.webp';
import mn from '../assets/proyects/manunair.webp';

const cards = [
    {id: 0, title: "CAYSA S.R.L", description: "Hygiene and maintenance services to a broad client base in a variety of industries. Consulting services for small, medium-sized, and large businesses.", link: "https://caysa-srl.com/", image: caysa},
    {id: 1, title: "AGRO BIOLOGICO", description: "Dedicated to implementing biological products with producers, engineers, researchers, and consultants, conducting soil analysis and with a clear and secure vision for the future of cultivation.", link:"https://www.fertilizantemicorrizas.com/", image: agro},
    {id: 2, title: "ZARQUITECTURA", description: "An establishment dedicated to architectural design and real estate developments, creating innovative and efficient solutions that adapt to the needs of its clients.", link:"https://zarquitectura7.com/", image: zarq},
    {id: 3, title: "SUNFLOWER", description: "A digital marketing agency that helps its clients reach their business goals on social media by implementing campaigns and optimizing their posts.", link:"https://sunfloweragencia.com/", image: sf},
    {id: 4, title: "MANUELA NAIR", description: "Freelancer who works in graphic design, virtual assistant, community manager, social media manager, and multimedia editing.", link:"https://manuelasanchis.sunfloweragencia.com/", image: mn}
];

const Proyects = () => {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className='proyects' id='proyects'>
            <div className="slider">
                <div className="proyect">
                    <div className="content">
                        <div className='body'>
                            <h2 data-aos="fade-up">{cards[index].title}</h2>
                            <div className='line' data-aos="fade-up"></div>
                            <p data-aos="fade-up">{cards[index].description}</p>
                            <a href={cards[index].link} data-aos="fade-up">WEB SITE</a>
                        </div>
                    </div>
                    <aside data-aos="fade-up">
                        <img src={cards[index].image} alt={cards[index].title} />
                    </aside>
                </div>
                <div className="slider-next">
                    <div className='next-btn' onClick={nextCard}>
                        <h4>NEXT</h4>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Proyects;
