import {Outlet} from "react-router-dom";

import Search from "./search";
import Profile from "./profile";
<<<<<<< HEAD
import RouteSummary from "./routes";

import routeReducer from "./reducers/route-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(routeReducer);

const Citi = () => {
  return (
    <Provider store={store}>
    <div className="row mt-2">
=======
import routesReducer from "./reducer/routesReducer";
import {combineReducers, createStore} from "redux";


import {Provider} from "react-redux";

const reducer = routesReducer;
const store = createStore(reducer);

const Citi = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
>>>>>>> react-typeerror
                <div className="col-2">
                    <Search/>
                </div>
                <div className="col-8">
                    <h1 style={{justifyContent: 'center', alignItems: 'center'}}>
                        Cycle!
                    </h1>
                    <RouteSummary/>
                    <Outlet/>

                </div>
                <div className="col-2">
                    <Profile/>
                </div>
            </div>
<<<<<<< HEAD
    </Provider>
  );
=======
        </Provider>
    );
>>>>>>> react-typeerror
};
export default Citi;