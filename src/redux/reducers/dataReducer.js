import { DATA_LOADING, ERROR, SET_ALL_CONTINENTS, SET_ALL_COUNTRIES_BY_CONTINENT } from "../actions/actionTypes"

const initialState = {
    isLoading: false,

    continents: [],
    
    error: null
}

const dataReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_ALL_CONTINENTS:
            return {...state, continents: action.payload, isLoading: false}

        case SET_ALL_COUNTRIES_BY_CONTINENT:
            const newState = {...state}

            newState.continents = state.continents.map( continent => {

                if(continent.code === action.payload.continentCode){
                    continent.countries = action.payload.countries
                    return continent
                }

                return continent
            })
            newState.isLoading = false
            return newState

        case DATA_LOADING:
            return {...state, isLoading: true}

        case ERROR:
            return {...state, error: action.payload}

        default:
            return state
    }
}

export default dataReducer