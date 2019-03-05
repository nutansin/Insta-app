import {combineReducers} from 'redux'
import reducertest from './reducer.test'
import reducerheader from './reducer-header' 

console.log("Here in combied reducer")
 const allreducer =  combineReducers({
    test: reducertest,
    header:reducerheader
   // unsplashprofiledata: fetchUnsplashProfileData
   // testComponent: reducecomponent
});


export default allreducer;