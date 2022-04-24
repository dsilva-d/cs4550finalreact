import {DELETE_ROUTE, FIND_ALL_ROUTES, CREATE_ROUTE, UPDATE_ROUTE}
    from "../../../actions/routeActions";

const tuitsReducer = (state, action) => {
    switch (action.type) {
        case FIND_ALL_ROUTES:
            return action.routes;
        // case 'like-tuit':
        //     return state.map(tuit => {
        //         if (tuit._id === action.tuit._id) {
        //             if (tuit.likes > 0) {
        //                 tuit.liked = false;
        //                 tuit.likes--;
        //             } else {
        //                 // tuit.liked = true;
        //                 tuit.likes++;
        //             }
        //             return tuit;
        //         } else {
        //             return tuit;
        //         }
        //     });
        case DELETE_ROUTE:
            return state.filter(
                route => route._id !== action.route._id);
        case CREATE_ROUTE:
            return [
                ...state,
                action.newRoute
            ];
        default:
            return state
        case UPDATE_ROUTE:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

    }
}
export default tuitsReducer;