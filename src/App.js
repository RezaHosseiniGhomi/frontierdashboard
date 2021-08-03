import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StatewideDashboard from './components/StatewideDashboard';
import FrontierDashboard from './components/FrontierDashboard';

function App() {
  return (
    <Router>
      <Route path="/" exact component={StatewideDashboard} />
      <Route exact path="/frontier" exact component={FrontierDashboard} />
    </Router>
  );
}

export default App;
