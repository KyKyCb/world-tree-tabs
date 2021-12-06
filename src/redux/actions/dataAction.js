import { toast } from "react-toastify";
import WorldData from "../../services/dataFetchService";
import { 
    SET_ALL_COUNTRIES_BY_CONTINENT, 
    SET_ALL_CONTINENTS, 
    ERROR,
    DATA_LOADING
} from "./actionTypes";

const allContinents = (data)=>{
    return {type: SET_ALL_CONTINENTS, payload: data}
}

const allCountries = (countries, continentCode)=>{
    return {type: SET_ALL_COUNTRIES_BY_CONTINENT, payload: {countries, continentCode}}
}

const dataLoading = ()=>{
    return {type: DATA_LOADING}
}

const sendError = (err)=>{
    return {type: ERROR, payload: err}
}

const asyncChangeData = (continentCode) =>{

    const id = toast.loading('Waiting data...')
    
    return async(dispatch)=>{
        try {


            dispatch(dataLoading())

            if(continentCode){
                const countries = await WorldData.getAllCountriesByContinent(continentCode)
                setTimeout(()=>{
                    dispatch(allCountries(countries.data.countries, continentCode))
                    toast.update(id, { render: "All is good", type: "success", isLoading: false, autoClose: 1000 })
                }, 500)
                
                

                return
            }

            const continents = await WorldData.getAllContinents()
            setTimeout(()=>{
                dispatch(allContinents(continents.data.continents))
                toast.update(id, { render: "All is good", type: "success", isLoading: false, autoClose: 1000 })
            }, 500)

            

        } catch (error) {
            toast.update(id, { render: "Whoops! Something went wrong!", type: "error", isLoading: false, autoClose: 1000 })
            dispatch(sendError({type: 'error', message: `${error}`}))
            console.error(error)
        }
    }
}

export default asyncChangeData