import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from "./Components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Featured from './Components/pages/Featured';
import News from './Components/pages/News';
import Faqs from './Components/pages/Faqs';
import Market from "./Components/pages/Market";
import Footer from './Components/Footer/Footer';
import Login from './Components/pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/Featured' element={<Featured/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Faqs' element={<Faqs/>} />
        <Route path='/Market' element={<Market/>} />
        <Route path='/Footer' element={<Footer/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
