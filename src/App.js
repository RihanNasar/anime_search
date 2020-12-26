import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Searchbar from './Searchbar'
import Row from './Row.js';
import Mainpage from './Mainpage'

import Searchpage from './Searchpage'
import Animepage from './Animepage'
function App() {
  return (
    
      
    <div className="App">
      <Router>
        <h1>Anime World</h1>
        <Searchbar />
        <Switch>
          
          <Route exact path="/"><Mainpage /></Route>
          <Route exact path="/search/:id" component={Searchpage} />
          <Route path="/anime/:id" component={Animepage} />
        </Switch>
      
      </Router>
    </div>
    
  );
}

export default App;
