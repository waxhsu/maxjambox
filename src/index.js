import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Skills from './components/Skills/Skills.js'
import Footer from './components/Footer/Footer.js'

import { JjDeDaGg } from './JjDeDaGg.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar />
    <App />
    <Projects />
    <About />
    <Skills />
    <Contact />
    <Footer />
    <JjDeDaGg />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
