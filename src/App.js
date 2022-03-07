import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data';
import Featured from './Components/Feature';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero/>
      <Products heading='choose your favorite' data={productData}/>
      <Featured />
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
