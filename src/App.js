import { Route, Switch } from 'react-router-dom';
// --------------- IMPORT COMPONENTS -------------- //
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// --------------- IMPORT PAGES ------------------ //
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import QuiSommesNous from "./pages/QuiSommesNous";
import Forme1Page from "./pages/forme1Page";
import Forme2Page from "./pages/forme2Page";
import ObjetDetails from "./pages/ObjetDetails";

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
        <Route path="/forme001" component={Forme1Page} />
        <Route path="/forme002" component={Forme2Page} />
        <Route path="/:itemId" component={ObjetDetails} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
