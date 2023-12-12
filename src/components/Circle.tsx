import { motion, useScroll } from "framer-motion"

import './Circle.css';

export default function Circle() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div className='circle-container'>
      <div className='circle-left'></div>
      <div className='circle-right'></div>
    </motion.div>
  )
}
