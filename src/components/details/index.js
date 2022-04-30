import {useEffect, useRef, useState} from 'react';
import {findRoutesAction, findStationsInNetworkAction} from "../../actions/routeActions";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const DetailsRoute = () => {
    // const [networkDetails, setNetworkDetails] = useState([])
    // const [routeDetails, setRouteDetails] = useState({})
    const {networkId} = useParams();
    const dispatch = useDispatch();
    const routeDetails = (nid) => findRoutesAction(dispatch, nid);
    const networkInfo = useSelector(state => state.stationList);
    const routeInfo = useSelector(state => state.stationList)
    useEffect(() => {
        findStationsInNetworkAction(dispatch, networkId)
        // findRoutesAction(dispatch, networkId)
    }, [dispatch])

    return (
        <>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h3>Popular routes on this network:</h3>
                    <div> {routeDetails(networkId) ?
                            <div className="col-2 m-1 bg-info rounded">
                                {routeInfo.routeName}
                            </div>
                        : "No routes found!"} </div>
                </div>
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <h3>All stations in this network:</h3>
                    <div
                        className="flex-fill row float-start bg-transparent justify-content-around rounded"> {(networkInfo && networkInfo.network && networkInfo.network.stations) ?
                        networkInfo.network.stations.map(station =>
                            <div className="col-2 m-1 bg-info rounded">
                                {station.name}
                            </div>)
                        : "No stations found!"} </div>
                </div>
            </div>
        </>
    )
}

export default DetailsRoute;
