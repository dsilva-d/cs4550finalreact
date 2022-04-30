import React, {useEffect} from "react";
import {findAllNetworksAction} from "../../actions/routeActions";
import {useDispatch, useSelector} from "react-redux";
import routesReducer from "../reducer/routesReducer";
import {createStore} from "redux";
import axios from "axios";
import {Link} from "react-router-dom";

const reducer = routesReducer;
const store = createStore(reducer);

const Results = (    {
                         cityName = 'Boston, MA'
                     }) => {

    const networks = useSelector(state => state.networks);
    const dispatch = useDispatch();
    useEffect(() => {
        findAllNetworksAction(dispatch)
    }, [dispatch]);
    console.log(networks)
    return <>
            <div>
                {networks && networks.filter(network => cityName === network.location.city).map(network =>
                    <>
                    <Link to={`/details/${network.id}`}>
                        <p className={`p-0 m-0`}>
                        <span
                            className={`text-white fw-bold`}>{network.location.city}
                        </span>
                        </p>
                        <p className={`fw-bold p-0 m-0`}>ID: {network.id}, Name: {network.name}</p>
                    </Link>
                    </>
                )}
            </div>

        </>
}

export default Results;