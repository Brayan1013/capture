import { motion } from 'framer-motion';

const { default: styled } = require('styled-components');

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1000px) {
    display: block;
    justify-content: center;
    padding: 2rem 5rem;
    justify-content: center;
    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 1rem 5rem;
  @media (max-width: 1000px) {
    .service-title {
      text-align: center;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
