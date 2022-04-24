import {Outlet} from "react-router-dom";

import Search from "./search";
import Profile from "./profile";
import routesReducer from "./reducer/routesReducer";
import {combineReducers, createStore} from "redux";


import {Provider} from "react-redux";

const reducer = routesReducer;
const store = createStore(reducer);

const Citi = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2">
                    <Search/>
                </div>
                <div className="col-8">
                    <h1 style={{justifyContent: 'center', alignItems: 'center'}}>
                        Cycle
                    </h1>
                    <Outlet/>
                </div>
                <div className="col-2">
                    <Profile/>
                </div>
            </div>
        </Provider>
    );
};
export default Citi;