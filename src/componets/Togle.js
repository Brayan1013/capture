import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const Togle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question">
      <motion.h4 layout onClick={() => setToggle(!toggle)}>
        {title}
      </motion.h4>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};
