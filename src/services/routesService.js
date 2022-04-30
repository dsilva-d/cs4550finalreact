import axios from "axios";


export const findAllRoutes = async () => {
    const response = await axios.get('https://cs4550-final-node.herokuapp.com/api/routes');
    return response.data;
}

export const findCityRoutes = async (networkID) => {
    const response = await axios.get(`https://cs4550-final-node.herokuapp.com/api/routes/${networkID}`)
    return response.data;
}

//export const createRoute = async (dispatch, bikeroute) => {
//    const response = await axios.post('https://cs4550-final-node.herokuapp.com/api/routes', bikeroute);
//    dispatch({
//        type: 'CREATE_NEW_ROUTES',
//        bikeroute: response.data
//    })
//}

//export const deleteRoute = async (dispatch, bikeroute) => {
//    const response = await axios.delete(`https://cs4550-final-node.herokuapp.com/api/routes/${bikeroute._id}`);
//    dispatch({
//        type: 'DELETE_ROUTE',
//        bikeroute
//    })
//}

//export const updateRoute = async (dispatch, updatedRoute) => {
//    const response = await axios.put(`https://cs4550-final-node.herokuapp.com/api/routes/${updatedRoute._id}`, updatedRoute);
//    dispatch({
//        type: 'UPDATE_ROUTE',
//        updatedRoute
//    })
//}