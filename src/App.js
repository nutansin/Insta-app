import React, { Component } from 'react'
import Posts from "./components/posts";
import Profile from "./components/profile";
import Header from './components/header';
import HashTagProfile from './components/hashTagProfile';

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
                            <Route exact path='/profile/:username' component={Profile}></Route>
                            <Route path='/explore/tags/:username' component={HashTagProfile}></Route>
                        </Switch>   
                </div>       
            </Router>
    
    )
  }
}

export default App
