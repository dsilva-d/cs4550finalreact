//import * as service from '../services/routesService';

import * as service from '../services/routesService';
import * as citybikesService from "../services/citybikesService"

//export const CREATE_ROUTE = 'CREATE_ROUTE';
export const FIND_NETWORK = 'FIND_NETWORK';
export const FIND_STATIONS = 'FIND_STATIONS';
export const FIND_ROUTES = 'FIND_ROUTES';
export const FIND_ALL_ROUTES = 'FIND_ALL_ROUTES';
//export const UPDATE_ROUTE = 'UPDATE_ROUTE';
//export const DELETE_ROUTE = 'DELETE_ROUTE';

//export const createRoute = async (dispatch, route) => {
//    const newRoute = await service.createRoute(route);
//    dispatch({
//        type: CREATE_ROUTE,
//        newRoute
//    })
//}
// export const findAllRoutesAction = async (dispatch) => {
//     const routes = await service.findAllRoutes();
//     dispatch({
//         type: FIND_ALL_ROUTES,
//         bikeroutes: routes
//     });
// }
export const findAllNetworksAction = async (dispatch) => {
    const networks = await citybikesService.findNetworks();
    dispatch({
        type: FIND_NETWORK,
        networks: networks
    })
}

export const findStationsInNetworkAction = async (dispatch, networkId) => {
    const networkInfo = await citybikesService.findStationsInNetwork(networkId);
    dispatch({
        type: FIND_ROUTES,
        networkInfo: networkInfo
    })
}

export const findRoutesAction = async (dispatch, city) => {
    const routeInfo = await service.findCityRoutes(city);
    dispatch({
        type: FIND_STATIONS,
        routeInfo: routeInfo
    })
}

export const findAllRoutesAction = async (dispatch) => {
    const allRoutes = await service.findAllRoutes();
    dispatch({
        type: FIND_ALL_ROUTES,
        allRoutes: allRoutes
    })
}
// export const updateRoute = async (dispatch, route) => {
//    const status = await service.updateRoute(route);
//    dispatch({
//        type: UPDATE_ROUTE,
//        route
//    });
// }
// export const deleteRoute = async (dispatch, route) => {
//    const response = await service.deleteRoute(route);
//    dispatch({
//        type: DELETE_ROUTE,
//        route
//    })
// }

