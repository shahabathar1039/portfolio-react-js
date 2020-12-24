import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
import Skills from './components/Skills';
import TopProjects from "./components/TopProjects"
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <h1>About Page</h1>
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contacts />
          </Route>
          <Route path="/tech-stack">
            <Navbar />
            <h1>Skills</h1>
          </Route>
          <Route path="/skills">
            <Navbar />
            <Skills />
          </Route>
          <Route path="/top-projects">
            <Navbar />
            <TopProjects />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
