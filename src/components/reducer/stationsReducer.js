import {FIND_STATIONS}
    from "../../actions/routeActions";

const stationsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_STATIONS:
            return action.routeInfo;
        default:
            return state;
    }
}
export default stationsReducer;