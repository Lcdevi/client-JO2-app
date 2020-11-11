import { Route, Switch } from 'react-router-dom';
// --------------- IMPORT COMPONENTS -------------- //
import NavBar from "./components/NavBar";

// --------------- IMPORT PAGES ------------------ //
import Home from "./pages/Home";

// ---------------- IMPORT STYLE ----------------- //
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path="/" component={Home} />
      
      </Switch>
      <h1>LES JO²</h1>
    </div>
  );
}

export default App;
