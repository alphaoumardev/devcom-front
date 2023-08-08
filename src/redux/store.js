import thunk from "redux-thunk";
import {applyMiddleware,} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import {legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers'

const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
