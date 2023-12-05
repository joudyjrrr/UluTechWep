import React from 'react';
import { motion } from 'framer-motion';
import './PreLoading.css';
import logo from '../../imges/Logo-ULU-Tech-06-98x117.png'
const Preloading = () => {

  const containerVariants = {
    animate: {
      width: ['100%', '50%', '0%'],
      transition: {
        duration: 2,
        ease: 'linear',
      },
    },
  };

  const textVariants = {
    exit: {
      x: -50,
      opacity: [1,0.7,0],
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };
 
  return (
    <>
      <motion.div
        className="containerLaoding"
        variants={containerVariants}
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="text-container"
          variants={textVariants}
          animate="exit"
        >
          <h3 class="animate-charcter"> Ulu Tech</h3>
          <img src={logo}/>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Preloading;