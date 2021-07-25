import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from "react-router-dom"
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import {homeObj1} from './components/InfoSection/Data'
function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <InfoSection {...homeObj1}/>
    </Router>
  );
}

export default App;
