import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { animateLine, animateTitle, animationPage } from '../animationPage';

const Contact = styled(motion.div)`
  background: white;
  min-height: 90vh;
  padding: 5rem 15rem;

  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;
const Title = styled(motion.h1)`
  font-size: 3rem;
`;

const Contactlinks = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 5rem;
  }
`;

const Link = styled(motion.h1)`
  font-size: 3rem;
`;

const Circle = styled.span`
  height: 2rem;
  width: 2rem;
  background: #282828;
  border-radius: 50%;
  margin-right: 1rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const Line = styled(motion.div)`
  height: 0.5rem;
  width: 100%;
  background: #23d997;
  margin: 2rem 0rem;
`;
export const ContactUs = () => {
  return (
    <Contact
      variants={animationPage}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Hidden>
        <Title variants={animateTitle}>Contact us</Title>
      </Hidden>

      <Line variants={animateLine}></Line>
      <Hidden>
        <Contactlinks variants={animateTitle}>
          <Circle></Circle>
          <Link>Send us a email</Link>
        </Contactlinks>
      </Hidden>

      <Hidden>
        <Contactlinks variants={animateTitle}>
          <Circle></Circle>
          <Link>Contact us through social media </Link>
        </Contactlinks>
      </Hidden>

      <Hidden>
        <Contactlinks variants={animateTitle}>
          <Circle></Circle>
          <Link>Contact us through a phone call</Link>
        </Contactlinks>
      </Hidden>
    </Contact>
  );
};
