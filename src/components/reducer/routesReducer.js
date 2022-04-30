import {FIND_NETWORK}
    from "../../actions/routeActions";

const routesReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_NETWORK:
            return action.networks
        default:
            return state;
    }
}
export default routesReducer;