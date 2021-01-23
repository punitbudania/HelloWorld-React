import './App.css';
import React, { Component } from 'react';
import Home from './components/home.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppRouter from './AppRouter';

class App extends Component
{
  render()
  {
    return(
      <div>
        <AppRouter />
      </div>
    )

    // return(
    //   <div className="app-main">
    //     <Router>
    //       <Switch>
    //         <Route path="">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </Router>
    //   </div>
    // );
  }
}

export default App;
