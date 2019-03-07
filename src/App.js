import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store';
import Feed from "./components/feed";
import Profile from "./components/profile";
import Header from './components/header';
import HashTagProfile from './components/hashTagProfile';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>   
                <div>  
                    <Header/>  
                    <Switch>
                        <Route exact path='/' component={Feed}></Route>
                        <Route exact path='/profile/:username' component={Profile}></Route>
                        <Route path='/explore/tags/:username' component={HashTagProfile}></Route>
                    </Switch>   
                </div>       
            </Router>
         </Provider>
    )
  }
}

export default App
