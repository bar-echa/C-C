import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Services from './Screens/Service';
import Navbar from './Components/Navbar';
import Projects from './Screens/Projects';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />   
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
