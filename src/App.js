import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'

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
            <h1>Projects Page</h1>
          </Route>
          <Route path="/contact">
            <Navbar />
            <h1>Contact Page</h1>
          </Route>
          <Route path="/tech-stack">
            <Navbar />
            <h1>Skills</h1>
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
