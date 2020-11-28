import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { animateText } from '../animationPage';
import { About } from './styles';
import { Togle } from './Togle';
import { useScrollbar } from './useScrollbar';

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  @media (max-width: 500px) {
    padding: 0rem 1rem;
    h2 {
      margin-bottom: 2rem;
    }

    .question {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }
  }

  h4 {
    padding: 2rem 0rem;
    cursor: pointer;
  }

  p {
    padding: 1rem 0rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    width: 100%;
    margin: 1rem 0rem;
  }
`;

export const FaqSection = () => {
  const [ref, controlls] = useScrollbar();
  return (
    <Faq variants={animateText} ref={ref} animate={controlls} initial="hidden">
      <h2>
        Ant Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Togle title="How Do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              mollitia!
            </p>
          </div>
        </Togle>
        <Togle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              mollitia!
            </p>
          </div>
        </Togle>
        <Togle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              mollitia!
            </p>
          </div>
        </Togle>
        <Togle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              mollitia!
            </p>
          </div>
        </Togle>
      </AnimateSharedLayout>
    </Faq>
  );
};
