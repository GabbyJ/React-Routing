import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Routing</h1>
        <h2>Learning how to use React Routers</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

//Everything contains a slash so without "exact", Home will always show on every page
//Inside Switch, it will only pick one /. So either keep the "exact"s or put them in order so / isn't always first (how it is now)
//Do Link instead of a href because a href will reload the page. Link will do client side routing
