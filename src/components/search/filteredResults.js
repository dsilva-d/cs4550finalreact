import React, {useEffect, useState} from "react";
import {findAllNetworksAction} from "../../actions/routeActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Results = ({
                     cityName = 'Boston, MA'
                 }) => {

    const networks = useSelector(state => state.searchReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        findAllNetworksAction(dispatch)
    }, [dispatch]);
    return <>
        <div>
            {networks.networks && networks.networks.filter(network => cityName === network.location.city).map(network =>
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