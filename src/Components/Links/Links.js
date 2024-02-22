import React from 'react'
import { motion } from 'framer-motion';

const Links = () => {

    const variants = {
        open: {
          transition: {
            staggerChildren : 0.1,
          },
        },
        closed: {
          transition: {
            staggerChildren : 0.05,
            staggerDirection: -1,
          },
        },
      }
      const textVariants = {
        open: {
          y: 0,
          opacity: 1,
        },
        closed: {
          y: 40,
          opacity: 0,
        },
      }

    const items = ["How it works", "About Us", "FAQ", <button>Explore Now</button>]
    return (
      <motion.div className='links' variants={variants}>
        {items.map((item)=> (
            <motion.a href={`#${item}`} key={item} className='item' variants={textVariants}>
                {item} <button>Explore</button></motion.a>
            
        ))}
      </motion.div>
    )
}

export default Links