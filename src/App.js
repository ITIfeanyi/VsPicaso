import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import PortFolio from "./components/Pages/Portfolio/PortFolio";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/portfolio'>
          <PortFolio />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
