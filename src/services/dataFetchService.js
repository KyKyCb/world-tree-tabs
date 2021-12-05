import { API_URL } from "../config"

class WorldData {
    static async fetchData(params){
        try {
            const result = await fetch(API_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: params
                })
            })

            if(!result.ok){
                return {type: 'error', message: 'Something went wrong. Try again later'}
            }

            return result.json()

        } catch (error) {
            console.error(error)
            return {type: 'error', message: 'Something went wrong. Try again later'}
        }
    }

    static async getAllContinents (){
        const query = '{continents{name code}}'
        return await this.fetchData(query)
    }

    static async getAllCountriesByContinent (continentCode){
        const query=`{
                countries (filter: {continent: {eq: "${continentCode}"}}){
                    name
                    code
                    languages{
                        name
                    }
                }
           }`
        return await this.fetchData(query)
    }
}

export default WorldData