import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';

 class dummy extends Component {
  render() {
    console.log("object in dummy")
    return (
      <div>
       
       <Link to="/profileLink/${userName}"> HERE IN DUMMY </Link>
      </div>
    )
  }
}

export default dummy
