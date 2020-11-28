import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './componets/GlobalStyle';
import { TopScroll } from './componets/TopScroll';
import { MainRouter } from './routers/MainRouter';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
