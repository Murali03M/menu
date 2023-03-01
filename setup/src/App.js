import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main>
       <section>
      <Router>
         <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
        </Routes>
       
        <Footer />
      </Router>
      </section>
    </main>
  );
}

export default App;
