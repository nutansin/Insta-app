import React, { Component } from 'react'
import {connect} from 'react-redux';


class testcontainer extends Component {
 
  constructor(){
    super();

    this.state={
      testId: 1,
      testName: "react-redux"
    }
    
  }

 
  render() {
    return (
      <div>
        <ul>
            <li>one</li>
            <li>rwo</li>
            <li>three</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      testUser : state
  }
}

export default connect(mapStateToProps)(testcontainer);
