import React, {useEffect, useState} from "react";
import {findAllRoutesAction, findNetworkByNameAction} from "../../actions/routeActions";
import {Provider, useDispatch, useSelector} from "react-redux";
import routesReducer from "../reducer/routesReducer";
import {createStore} from "redux";

const reducer = routesReducer;
const store = createStore(reducer);

const Results = (cityName) => {

    const networks = useSelector(state => state.networks);
    const dispatch = useDispatch();
    useEffect(() => {
        // findAllRoutesAction(dispatch)
        findNetworkByNameAction(dispatch)
    }, [dispatch]);
    console.log(networks)
    return <Provider store={store}>
        <>
            <div>
                {networks && networks.filter(network => cityName === network.location.city).map(network =>
                    <>
                        <p className={`p-0 m-0`}>
                        <span
                            className={`text-white fw-bold`}>{network.location.city}
                        </span>
                        </p>
                        <p className={`fw-bold p-0 m-0`}>ID: {network.id}, Name: {network.name}</p>
                    </>
                )}
            </div>

        </>
    </Provider>
}

export default Results;