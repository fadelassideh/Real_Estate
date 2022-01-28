import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f96d9e9022mshf9313ebf2b78eeap1adb23jsnf495660c72cb'
           }
    })
    return data
}