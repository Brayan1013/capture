import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Nav } from '../componets/Nav';
import { AboutUs } from '../pages/AboutUs';
import { ContactUs } from '../pages/ContactUs';
import { DetailMovie } from '../pages/DetailMovie';
import { OurWork } from '../pages/OurWork';

export const MainRouter = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/work/:id" component={DetailMovie} />
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </>
  );
};
