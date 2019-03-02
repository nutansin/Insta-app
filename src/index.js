import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/posts";
import Profile from "./components/profile";

import { BrowserRouter, Link, Route } from 'react-router-dom';

const Index = () => {
  return <div>Instagram</div>;
};

const AppConst = () =>(
  <div>
    <Link to='/a' > <Posts/> </Link>
  </div>
)



const ProfileConst = () =>(
  <div>
    <Link to='/profile'> <Profile/></Link>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={AppConst} />
      <Route path="/profile" component={ProfileConst}/>

    </div>

  </BrowserRouter>
, document.getElementById("root"));