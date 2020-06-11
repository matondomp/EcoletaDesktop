import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./pages/home"
import Points from "./pages/points"


ReactDOM.render(
  <Router>
    <div>
      <main>
        
        <Route exact path="/" component={Home} />
        
        <Route path="/Points" component={Points} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
)
