import { Route, Switch } from 'react-router-dom';
// --------------- IMPORT COMPONENTS -------------- //
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// --------------- IMPORT PAGES ------------------ //
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import QuiSommesNous from "./pages/QuiSommesNous";
import tassePage from "./pages/PageTasse";
import pageTassesPico from "./pages/PageTassePico";
import bolPage from "./pages/PageBol";
import vasePage from "./pages/PageVase";
import ramequinPage from "./pages/PageRamequin";
import ObjetDetails from "./pages/ObjetDetails";
import Actualites from "./pages/Actualites";
import testGsap from "./pages/TestGsap";


// ---------------- IMPORT STYLE ----------------- //
import './App.css';

function App() {

  return (
    <div id="main-main-main">
      <NavBar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/qui-sommes-nous" component={QuiSommesNous} />
        <Route path="/tasses" component={tassePage} />
        <Route path="/tasses-pico" component={pageTassesPico} />
        <Route path="/bols" component={bolPage} />
        <Route path="/vases" component={vasePage} />
        <Route path="/ramequins" component={ramequinPage} />
        <Route path="/actualites" component={Actualites} />
        <Route path="/test" component={testGsap} />
        <Route path="/:itemId" component={ObjetDetails} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
