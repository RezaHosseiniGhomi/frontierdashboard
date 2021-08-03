import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StatewideDashboard from './components/StatewideDashboard';
import FrontierDashboard from './components/FrontierDashboard';

function App() {
  return (
    <Router>
      <Route path="/frontierdashboard/" exact component={StatewideDashboard} />
      <Route exact path="/frontierdashboard/frontier" exact component={FrontierDashboard} />
    </Router>
  );
}

export default App;
