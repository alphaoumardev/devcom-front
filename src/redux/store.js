import thunk from "redux-thunk";
import {applyMiddleware,} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers'

const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
//
// import { configureStore } from '@reduxjs/toolkit'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
//
// export const store = configureStore({
//     reducer: {
//         todos: todosReducer,
//         filters: filtersReducer
//     }
// })
