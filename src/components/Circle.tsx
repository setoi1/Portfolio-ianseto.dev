import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion"

import './Circle.css';

export default function Circle() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current page's scrollY value
      const scrollY = window.scrollY;

      // Get the maximum scroll height of the page
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate the scroll progress as a fraction (0 to 1)
      const scrollProgress = Math.min(scrollY / maxScrollHeight, 1);

      // Rotate the circle based on the scroll progress (0 to 360 degrees)
      const newRotation = scrollProgress * 360;

      setRotation(newRotation);
    }
    
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      className='circle-container' 
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className='circle-left' />
      <div className='circle-right' />
    </motion.div>
  )
}
