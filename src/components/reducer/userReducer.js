import {FIND_USER}
    from "../../actions/userActions";

const user = (state = userData, action) => {
    switch (action.type) {
        case FIND_USER:
            return action.user;
        case SAVE_USER:
             return action.user;
        default:
            return state
    }
}
export default user;