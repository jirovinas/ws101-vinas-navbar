import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      
     </>
    </div>
  );
}

export default App;