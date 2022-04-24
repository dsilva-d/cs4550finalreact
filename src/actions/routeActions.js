import * as service from '../services/routesService';
export const CREATE_ROUTE = 'CREATE_ROUTE';
export const FIND_ALL_ROUTES = 'FIND_ALL_ROUTES';
export const UPDATE_ROUTE = 'UPDATE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';

export const createRoute = async (dispatch, route) => {
    const newRoute = await service.createRoute(route);
    dispatch({
        type: CREATE_ROUTE,
        newRoute
    })
}
export const findAllRoutes = async (dispatch) => {
    const routes = await service.findAllRoutes();
    dispatch({
        type: FIND_ALL_ROUTES,
        routes
    });
}
export const updateRoute = async (dispatch, route) => {
    const status = await service.updateRoute(route);
    dispatch({
        type: UPDATE_ROUTE,
        route
    });
}
export const deleteRoute = async (dispatch, route) => {
    const response = await service.deleteRoute(route);
    dispatch({
        type: DELETE_ROUTE,
        route
    })
}