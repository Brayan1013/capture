import React from 'react';
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//images
import home2 from '../img/home2.png';
//styles
import { About, Description, Image } from './styles';
import styled from 'styled-components';
//Scrolll animation
import { animateText } from '../animationPage';
import { useScrollbar } from './useScrollbar';

const Service = styled(About)`
  h2 {
    margin-bottom: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  margin-top: 1rem;
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      background: white;
      color: black;
      margin: 0rem 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export const ServicesSection = () => {
  const [ref, controlls] = useScrollbar();
  return (
    <Service
      variants={animateText}
      animate={controlls}
      initial="hidden"
      ref={ref}
    >
      <Description>
        <h2 className="service-title">
          High <span>quality</span>service
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Camera" />
      </Image>
    </Service>
  );
};
