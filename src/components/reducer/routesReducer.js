import {FIND_ROUTES}
    from "../../actions/routeActions";

const routesReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ROUTES:
            return action.networkInfo;
        default:
            return state;
    }
}
export default routesReducer;