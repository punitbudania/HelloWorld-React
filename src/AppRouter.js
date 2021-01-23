import './App.css';
import React, { Component } from 'react';
import Home from './components/home.js';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class AppRouter extends Component
{
  render()
  {
    return(
      <div>
        <Router>
          <div>
            <Route path="/" component={Home} exact></Route>
            <Route path="/welcome" component={Welcome}></Route>
          </div>
        </Router>
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

export default AppRouter;
