import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <h1>Exercise - Frontend content</h1>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
