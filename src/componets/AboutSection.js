import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from './styles';
import { motion } from 'framer-motion';
import { animateImage, animateText, animateTitle } from '../animationPage';
import { Wave } from './Wave';
import { TopScroll } from './TopScroll';

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <div className="hide">
            <motion.h2 variants={animateTitle}>We work to make</motion.h2>
          </div>
          <Hide>
            <motion.h2 variants={animateTitle}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={animateTitle}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={animateText}>
          Contact us for any photography or videos ideas that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={animateText}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={animateImage}
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
      <TopScroll />
    </About>
  );
};
