import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Property from './Components/Property';
import Services from './Components/Services';
import Work from './Components/Work';
import Accordion from './Components/Accordion';
import Counter from './Components/Counter';
import Agents from './Components/Agents';
import Footer from './Components/Footer';


function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Property />
      <Services />
      <Work />
      <Accordion />
      <Counter />
      <Agents />
      <Footer />
    </Fragment>
  );
}

export default App;
