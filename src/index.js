import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {combinedReducers} from 'redux';
import postReducer from './reducers/postReducer';

ReactDOM.render(
 <App/>
, document.getElementById("root"));

export default combinedReducers({
    posts: postReducer
});