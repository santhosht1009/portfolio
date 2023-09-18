
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';
import Skills from './routes/Skills';
import Education from './routes/Education';
import ProjectDetail from './routes/ProjectDetail';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/project/details' element={<ProjectDetail />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      


      
    </div>
  );
}

export default App;
