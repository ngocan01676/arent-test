import { useEffect, useState } from 'react';
import icon_scroll from '../../assets/img/component_scroll.png'
import './style.scss'

export const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  };


  return (
    <img onClick={handleClick} className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`} src={icon_scroll} alt="Icon scroll" />
  );
};