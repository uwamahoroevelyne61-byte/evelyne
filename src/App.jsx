import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './include/Home1.jsx';
import About from './include/About1.jsx';
import NavBar from './include/NavBar.jsx';
import Contact from './include/contact.jsx';
import'./App.css'
const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;