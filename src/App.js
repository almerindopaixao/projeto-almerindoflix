import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './routes/Route';
import Menu from './components/Menu';
import Footer from './components/Footer';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <GlobalStyled>
        <Route />
      </GlobalStyled>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
