import { motion } from 'framer-motion';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: auto;
  min-height: 10vh;
  align-items: center;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 1;

  .active {
    background: #23d997;
    color: white;
    padding: 0.7rem 1rem;
    border-radius: 5px;
  }

  @media (max-width: 500px) {
    align-items: center;

    h1 {
      display: none;
    }
  }

  h1 {
    flex: 1;
    margin-left: 15rem;
  }

  #logo {
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
    color: white;
    text-decoration: none;
  }

  ul {
    flex: 1;
    display: flex;
    justify-content: space-around;
    margin-right: 4rem;

    li {
      position: relative;
      list-style: none;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export const Nav = () => {
  return (
    <StyleNav>
      <h1>
        <Link id="logo" to="/">
          Campture
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/work">
            Our work
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact us
          </NavLink>
        </li>
      </ul>
    </StyleNav>
  );
};
