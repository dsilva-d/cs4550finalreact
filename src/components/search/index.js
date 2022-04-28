import React, {useEffect, useState} from "react";
import {findAllRoutesAction, findNetworkByNameAction} from "../../actions/routeActions";
import {Provider, useDispatch, useSelector} from "react-redux";
import routesReducer from "../reducer/routesReducer";
import {createStore} from "redux";
import Results from "./filteredResults"

const reducer = routesReducer;
const store = createStore(reducer);

const Search = () => {

    const networks = useSelector(state => state.networks);
    const dispatch = useDispatch();
    useEffect(() => {
        // findAllRoutesAction(dispatch)
        findNetworkByNameAction(dispatch)
    }, [dispatch]);
    console.log(networks)
    return <Provider store={store}>
        <>
            <div className="input-group input-group-lg pt-2">
                <input type="text" className="form-control" placeholder="Enter a city"
                       aria-label="Location" aria-describedby="basic-addon2"/>
                <a href="search" className="btn btn-primary" type="button" id="button-addon2">Find Routes</a>
            </div>
            <div>
                <Results cityName={"Boston"}/>
                {/*{networks && networks.map(network =>*/}
                {/*    <>*/}
                {/*        <p className={`p-0 m-0`}>*/}
                {/*        <span*/}
                {/*            className={`text-white fw-bold`}>{network.location.city}*/}
                {/*        </span>*/}
                {/*        </p>*/}
                {/*        <p className={`fw-bold p-0 m-0`}>ID: {network.id}, Name: {network.name}</p>*/}
                {/*    </>*/}
                {/*)}*/}
            </div>

        </>
    </Provider>
}

export default Search;