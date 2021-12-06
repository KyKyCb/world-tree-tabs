
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import dataReducer from "./redux/reducers/dataReducer";
import generationReducer from "./redux/reducers/generationReducer";
import switchDataReducer from "./redux/reducers/switchDataReducer";

const rootReducer = combineReducers({worldData: dataReducer, genData: generationReducer, renderType: switchDataReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store