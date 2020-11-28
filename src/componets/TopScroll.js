import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TopScroll = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};
