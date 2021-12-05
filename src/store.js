
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import dataReducer from "./redux/reducers/dataReducer";


const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store