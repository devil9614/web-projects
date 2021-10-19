import {useState} from 'react';
import './App.css';
import Navbar from './navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/" exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
