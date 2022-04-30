import axios from "axios";

export const findNetworks = async () => {
    const response = await axios.get('http://api.citybik.es/v2/networks')
    return response.data;
}

export const findStationsInNetwork = async (networkID) => {
    const response = await axios.get(`http://api.citybik.es/v2/networks/${networkID}`)
    return response.data;
}