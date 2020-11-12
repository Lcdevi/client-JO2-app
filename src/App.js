import { Route, Switch } from 'react-router-dom';
// --------------- IMPORT COMPONENTS -------------- //
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// --------------- IMPORT PAGES ------------------ //
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import QuiSommesNous from "./pages/QuiSommesNous";

// ---------------- IMPORT STYLE ----------------- //
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/qui-sommes-nous" component={QuiSommesNous} />
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
