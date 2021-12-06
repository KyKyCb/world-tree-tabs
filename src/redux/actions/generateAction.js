import optimizedGenerator from "../../utils/optimizedGenerator/optimizedGenerator";
import {
    RESET_GLOBAL_PARAMS,
    SET_GLOBAL_PARAMS
} from "./actionTypes";

export const globalParams = (params)=>{
    return {type: SET_GLOBAL_PARAMS, payload: params}
}

export const resetParams = ()=>{
    return {type: RESET_GLOBAL_PARAMS}
}

const generateData = (globalDepth, globalQuantity, depthLevel, currentQuantity )=>{

    const data = optimizedGenerator(globalDepth, globalQuantity, depthLevel, currentQuantity)
    
    return {}
}
