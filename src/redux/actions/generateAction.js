import { toast } from "react-toastify";
import dataGenerator from "../../utils/dataGenerator/dataGenerator";
import {
    RESET_GLOBAL_PARAMS,
    SET_GENERATED_DATA,
    SET_GLOBAL_PARAMS
} from "./actionTypes";

export const globalParams = (params)=>{
    return {type: SET_GLOBAL_PARAMS, payload: params}
}

export const resetParams = ()=>{
    return {type: RESET_GLOBAL_PARAMS}
}

export const generateDataAction = (globalDepth, globalQuantity)=>{

    const toastId = toast.loading('Waiting data...')
    
    const data = dataGenerator(globalDepth, globalQuantity)

    toast.update(toastId, {render: 'All good!', type: "success", isLoading: false, autoClose: 1000})

    return {type: SET_GENERATED_DATA, payload: data}
}
