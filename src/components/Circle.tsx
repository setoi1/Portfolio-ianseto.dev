import { useState, useEffect } from "react";
import { motion } from "framer-motion"

import './Circle.css';

export default function Circle() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(window.scrollY / maxScrollHeight, 1);
      const newRotation = scrollProgress * 360;
      setRotation(newRotation);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='circle-container' >
      <motion.div
        className="rotation-wrapper"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className='circle-left' />
        <div className='circle-right' />
      </motion.div>
    </div>
  )
}
