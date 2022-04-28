import {DELETE_ROUTE, FIND_NETWORK, FIND_ALL_ROUTES, CREATE_ROUTE, UPDATE_ROUTE}
    from "../../actions/routeActions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_NETWORK:
            return action.bikeshareNetworks

        case FIND_ALL_ROUTES:
            return action.bikeroutes;
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
//        case DELETE_ROUTE:
//            return state.filter(
//                bikeroute => bikeroute._id !== action.bikeroute._id);
//        case CREATE_ROUTE:
//            return [
//                ...state,
//                action.newRoute
//            ];
        default:
            return state;
    }
}
export default tuitsReducer;