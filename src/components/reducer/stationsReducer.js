import {FIND_ROUTES}
    from "../../actions/routeActions";

const stationsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ROUTES:
            return action.routeInfo
        default:
            return state;
    }
}
export default stationsReducer;