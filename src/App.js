import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import {landingSectionData} from './components/InfoSection/Data'
import Services from './components/Services';
import Signin from './components/Signin'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Hero />
          {landingSectionData.map(dataobj => <InfoSection {...dataobj}/>)}
          <Services />  
        </Route>
        <Route path='/signin'>
          <Signin/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
