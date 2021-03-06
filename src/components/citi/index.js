import {Outlet} from "react-router-dom"
import searchReducer from "../reducer/searchReducer";
import stationsReducer from "../reducer/stationsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import logo from './images/citi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const combinedReducers = combineReducers({networks: searchReducer, stationList: stationsReducer});

const store = createStore(combinedReducers);

const Citi = () => {
    return (
        <Provider store={store}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-fill rounded-bottom">
                <div className="container-fluid float-end d-flex flex-row align-items-start">
                    <div className="row">
                        <a className="navbar-brand">APP_NAME</a>
                    </div>
                    <div className="row">
                        <div className="container-fluid d-flex flex-row-reverse">
                            <a className="nav-link d-flex" href="signin">Log In</a>
                            <a className="nav-link d-flex" href="signup">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/*Banner image, can use personal design*/}
            <div className="w-100 pt-2">
                <img src={logo} className="img-fluid rounded"/>
            </div>
            {/*Search bar can be its own component*/}
            <div>
                <div className="input-group input-group-lg pt-2">
                    <input type="text" className="form-control" placeholder="Enter a city or station"
                           aria-label="Location" aria-describedby="basic-addon2"/>
                    <a href="search" className="btn btn-primary" type="button" id="button-addon2">Find Routes</a>
                </div>
            </div>
            {/*The cards can be their own component too, to make it easier to not show them unless logged in*/}
            <div className = "container-fluid d-flex justify-content-evenly pt-5 pb-5">
                <div className="card text-center" style={{"width": "24rem"}}>
                    <div className="card-body">
                        <i className="fa fa-bicycle fa-5x"/>
                    </div>
                    <a href="routes/bike" className="btn btn-primary">Plan a bike ride</a>
                </div>
                <div className="card text-center" style={{"width": "24rem"}}>
                    <div className="card-body">
                        <i className="fa fa-running fa-5x"/>
                    </div>
                    <a href="routes/run" className="btn btn-primary">Plan a run</a>
                </div>
            </div>
        </Provider>
    );
};
export default Citi;