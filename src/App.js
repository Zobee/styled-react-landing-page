import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from "react-router-dom"
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <InfoSection />
    </Router>
  );
}

export default App;
