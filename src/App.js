import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
