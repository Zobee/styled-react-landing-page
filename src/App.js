import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from "react-router-dom"
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import {landingSectionData} from './components/InfoSection/Data'
function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      {landingSectionData.map(dataobj => <InfoSection {...dataobj}/>)}
    </Router>
  );
}

export default App;
