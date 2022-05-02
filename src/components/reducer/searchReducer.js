import {FIND_NETWORK}
    from "../../actions/routeActions";

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_NETWORK:
            return action.networks;
        default:
            return state;
    }
}
export default searchReducer;