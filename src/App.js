import React, { Component } from 'react'
import Posts from "./components/posts";
import Profile from "./components/profile";
import Header from './components/header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {
  render() {
    return (
                  <Router>   
                <div>  
                        <Header/>  
                        <Switch>
                            <Route exact path='/' component={Posts}></Route>
                            <Route exact path='/profileLink' component={Profile}></Route>
                        </Switch>   
                </div>       
            </Router>
    
    )
  }
}

export default App
