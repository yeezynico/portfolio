import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Exercices from './components/Exercices/index';
import CaseStudy from './components/ConcretCase/index';
import ConcretCase from './components/CaseStudy/index';
import JN from './components/jour_nuit/Jour_nuit';

const App = () => {
  return (
    <BrowserRouter>

      <div>
        <h1 className='title'>Portfolio de Nico</h1>
        <nav className='nav'>
          <ul><Link to="/">Home</Link></ul>
           <ul><a href='https://github.com/yeezynico?tab=repositories'>Git</a></ul>
          <ul><Link to="/works">Works</Link></ul>
          <JN />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* la route du link to de Work.jsx */}
          <Route path="works/exercices" element={<Exercices />} />
          <Route path="works/case-study" element={<CaseStudy />} />
          <Route path="works/concret-case" element={<ConcretCase />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}
export default App;