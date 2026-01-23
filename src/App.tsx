import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import MoneyManProject from './project-pages/MoneyManProject';
import SqueezeProject from './project-pages/SqueezeProject';
import CatChaosProject from './project-pages/CatChaosProject';
import RareTaskProject from './project-pages/RareTaskProject';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/money-man" element={<MoneyManProject />} />
        <Route path="/projects/squeeze" element={<SqueezeProject />} />
        <Route path="/projects/catchaos" element={<CatChaosProject />} />
        <Route path="/projects/rare-task-reminder" element={<RareTaskProject />} />
      </Routes>
    </>
  );
};

export default App
