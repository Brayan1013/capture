import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animationPage } from '../animationPage';
import { MovieState } from '../MovieState';

const Details = styled(motion.div)`
  //background: white;

  @media (max-width: 1000px) {
    img {
      width: 100%;
      margin: 0;
    }
  }
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h1 {
    position: absolute;
    color: white;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const Awars = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 15rem;

  @media (max-width: 1000px) {
    display: block;
    padding: 0rem;
    margin: 10rem 2rem 0rem 2rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DetailMovie = ({ history }) => {
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={animationPage}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt="Movie" />
          </HeadLine>
          <Awars>
            {movie.awards.map((award, index) => (
              <Award {...award} key={index} />
            ))}
          </Awars>

          <ImageDisplay>
            <img src={movie.secondaryImg} alt="Movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Styleaward = styled.div`
  h3 {
    padding: 1rem 0rem;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    width: 90%;
    margin: 0.5rem 0rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <Styleaward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </Styleaward>
  );
};
