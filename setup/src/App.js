import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ImageDetails from './components/ImageDetails'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {


return <main>
    <section >
      
    <Router>
    <Header/>
     <Routes> 
        <Route exact path='/' element={<Menu/>}/>
        <Route path='/images/*'  element={<ImageDetails/>} /> 
        <Route>404 Not Found !</Route>
        </Routes>
        <Footer/>
     </Router>
   
    </section>
  </main>;
}

export default App;
