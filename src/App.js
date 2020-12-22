import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Searchbar from './Searchbar'
import Row from './Row.js';
import Mainpage from './Mainpage'

import Searchpage from './Searchpage'
function App() {
  return (
    
      
    <div className="App">
      <Router>
        <h1>Anime World</h1>
        <Searchbar />
        <Switch>
          
          <Route exact path="/"><Mainpage /></Route>
          <Route path="/search/:id" component={Searchpage} />
        </Switch>
      
      </Router>
    </div>
    
  );
}

export default App;
