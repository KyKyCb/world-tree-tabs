import { SWITCH_DATA_TYPE } from "../actions/actionTypes"

const initialState = {
    isWorld: true
}

const switchDataReducer = (state = initialState, action)=>{
    switch(action.type){
        case SWITCH_DATA_TYPE:
            return {...state, isWorld: !state.isWorld}
        default:
            return state
    }
}

export default switchDataReducer