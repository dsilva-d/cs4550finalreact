import axios from "axios";


export const findAllRoutes = async (dispatch) => {
    const response = await axios.get('https://cs4550-final-node.herokuapp.com/api/routes');
    console.log(response.data);
    dispatch({
        type: 'FIND_ALL_ROUTES',
        routes: response.data
    })
}

export const createRoute = async (dispatch, route) => {
    const response = await axios.post('https://cs4550-final-node.herokuapp.com/api/routes', route);
    dispatch({
        type: 'CREATE_NEW_ROUTES',
        route: response.data
    })
}

export const deleteRoute = async (dispatch, route) => {
    const response = await axios.delete(`https://cs4550-final-node.herokuapp.com/api/routes/${route._id}`);
    dispatch({
        type: 'DELETE_ROUTE',
        route
    })
}

export const updateRoute = async (dispatch, updatedRoute) => {
    const response = await axios.put(`https://cs4550-final-node.herokuapp.com/api/routes/${updatedRoute._id}`, updatedRoute);
    dispatch({
        type: 'UPDATE_ROUTE',
        updatedRoute
    })
}