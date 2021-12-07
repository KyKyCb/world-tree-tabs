import { RESET_GLOBAL_PARAMS, SET_GENERATED_DATA, SET_GLOBAL_PARAMS } from "../actions/actionTypes"

const initialState = {
    depth: 1,
    nodes: 1,

    data: [],
}

const generationReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_GLOBAL_PARAMS:
            return {...state, depth: action.payload.depth, nodes: action.payload.nodes, data: []}
        case RESET_GLOBAL_PARAMS:
            return initialState
        case SET_GENERATED_DATA:
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default generationReducer