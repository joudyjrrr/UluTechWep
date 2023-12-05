import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/AboutUs/About'
import Choose from './components/ChooseUs/Choose';
import Statistics from './components/Statistics/Statistics';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import PreLoading from  './components/PreLoading/PreLoading'
function App() {

       return(
          <>
          <PreLoading/>
          <Header/>
          <Home/>
          <Services/>
          <About/>
          <Choose/>
          <Statistics/>
          <ContactUs/>
          <Footer/>
          <BackToTopButton/>
          </>
       )
}

export default App;
