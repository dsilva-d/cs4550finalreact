import {FIND_STATIONS, FIND_ROUTES}
    from "../../actions/routeActions";

const stationsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ROUTES:
            return action.routes
        case FIND_STATIONS:
            return action.networkInfo
        default:
            return state;
    }
}
export default stationsReducer;