import React from 'react';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  animateText,
  animateImage,
  animationPage,
  animateLine,
  slider,
} from '../animationPage';
import { useScrollbar } from '../componets/useScrollbar';
import { TopScroll } from '../componets/TopScroll';

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 15rem;
  background: white;

  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
`;

const Movie = styled(motion.div)`
  margin-bottom: 10rem;
  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    padding-bottom: 1rem;
    font-size: 3rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Framer1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  background: #fffebf;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const Framer2 = styled(Framer1)`
  background: #ff8efb;
`;

const Framer3 = styled(Framer1)`
  background: #8ed2ff;
`;

const Framer4 = styled(Framer1)`
  background: pink;
`;

export const OurWork = () => {
  const [ref1, controlls1] = useScrollbar();
  const [ref2, controlls2] = useScrollbar();
  return (
    <Work variants={animationPage} exit="exit" initial="hidden" animate="show">
      <Framer1 variants={slider}></Framer1>
      <Framer2 variants={slider}></Framer2>
      <Framer3 variants={slider}></Framer3>
      <Framer4 variants={slider}></Framer4>
      <Movie>
        <motion.h1 variants={animateText}>The Athlete</motion.h1>
        <motion.div variants={animateLine} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={animateImage} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={ref1} animate={controlls1} initial="hidden">
        <motion.h1 variants={animateText}>The Theracer</motion.h1>
        <motion.div variants={animateLine} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={animateImage} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={ref2} animate={controlls2} initial="hidden">
        <motion.h1 variants={animateText}>The Goodtimes</motion.h1>
        <motion.div variants={animateLine} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={animateImage}
              src={goodtimes}
              alt="goodtimes"
            />
          </Hide>
        </Link>
      </Movie>
      <TopScroll />
    </Work>
  );
};
