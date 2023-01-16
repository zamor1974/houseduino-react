import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Dati from './components/data';
import Footer from './components/footer';

export default function App() {
const valoreMenu={}
  return (
    <div >
      <Header />

      <Home />
      <Dati />
      <Footer />
    </div>
  );
}

