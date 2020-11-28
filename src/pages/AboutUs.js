import { motion } from 'framer-motion';
import React from 'react';
import { animationPage } from '../animationPage';
import { AboutSection } from '../componets/AboutSection';
import { FaqSection } from '../componets/FaqSection';
import { ServicesSection } from '../componets/ServicesSection';

export const AboutUs = () => {
  return (
    <motion.div
      variants={animationPage}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
