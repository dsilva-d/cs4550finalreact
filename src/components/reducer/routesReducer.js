import {FIND_ROUTES, FIND_ALL_ROUTES}
    from "../../actions/routeActions";

const routesReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ROUTES:
            return action.networkInfo;
        case FIND_ALL_ROUTES:
            return action.allRoutes;
        default:
            return state;
    }
}
export default routesReducer;