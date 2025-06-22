import '../styles/textslider.css';
import { useState, useEffect } from "react";

const TextSlider = () => {
  const words = ["PERSPECTIVE", "COMPROMISE", "RESPONSIBILITY"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-slider">
      {words.map((word, index) => (
        <p key={index} className={`text-item ${index === currentIndex ? "visible" : ""}`}>
          {word}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;
