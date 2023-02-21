import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageDetails from './components/ImageDetails';
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
          <Route path="/images/:imageId" render={({ location }) => <ImageDetails imageId={location.state.imageId} />} />
         <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
       
        <Footer />
      </Router>
      </section>
    </main>
  );
}

export default App;
