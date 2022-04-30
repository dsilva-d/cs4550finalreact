import {useEffect, useRef, useState} from 'react';
import {findStationsInNetworkAction} from "../../actions/routeActions";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";

const DetailsRoute = () => {
    const [networkDetails, setNetworkDetails] = useState({"network":{"stations": ["Station1"]}})
    // const [routeDetails, setRouteDetails] = useState({})
    const {networkId} = useParams();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setNetworkDetails(findStationsInNetworkAction(networkId).network)
    //     // fetchRoutesForNetwork()
    // }, [])
    console.log(networkId)
    console.log("the network details are:")
    console.log(networkDetails)
    return(
        <>
            {networkDetails && networkDetails["network"]["stations"].map(station => <div> {station} </div>)}
        </>
    )
}

export default DetailsRoute;
