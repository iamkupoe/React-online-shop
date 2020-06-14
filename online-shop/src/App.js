import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App" style={{fontFamily:'Roboto'}}>
     <Navbar/>
     <Carousel/>
     <Body thumbnail='First'/>
     <Footer/>
     
     



    </div>
  );
}

export default App;
