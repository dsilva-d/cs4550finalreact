import {useEffect, useRef, useState} from 'react';
import {findRoutesAction, findStationsInNetworkAction, findAllRoutesAction} from "../../actions/routeActions";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const DetailsRoute = () => {
    // const [networkDetails, setNetworkDetails] = useState([])
    // const [routeDetails, setRouteDetails] = useState({})
    const {networkId} = useParams();
    const dispatch = useDispatch();

    const networkInfo = useSelector(state => state.routesReducer);
    const routeInfo = useSelector(state => state.stationsReducer);
    const allRoutes = useSelector(state => state.routesReducer);


    useEffect(() => {

        if(window.location.pathname.includes('routes')) {
            findAllRoutesAction(dispatch)
        } else {
            findStationsInNetworkAction(dispatch, networkId)
            findRoutesAction(dispatch, networkId)
        }

    }, [dispatch])

    console.log(allRoutes)


    if(window.location.pathname.includes('routes')) {
        const username = window.location.pathname.substring(16, window.location.pathname.length)
        if(allRoutes.filter(routeTile => username === routeTile.postedBy.username).length === 0) {
            return <>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h3>{username} has no routes!</h3>
                </div>
            </>
        } else {
        return <>
            <div className="pb-10">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h3>Routes taken by {username}:</h3>
                        </div>
                        <div className="d-flex row container-fluid justify-content-center">
                            {allRoutes && allRoutes.filter(routeTile => username === routeTile.postedBy.username).map(routeTile =>
                                <div className="p-1 mb-2 container-fluid row bg-info rounded">
                                    <h5>{routeTile.routeName}</h5>
                                    <div className="row">
                                        <div className="col-3">
                                            <h6>Start: {routeTile.origin.stationName}</h6>
                                            <h6>Bikes available: {routeTile.origin.bikes}</h6>
                                        </div>
                                        <div className="col-3">
                                            <h6>End: {routeTile.destination.stationName}</h6>
                                            <h6>Docks available: {routeTile.destination.docks}</h6>
                                        </div>
                                        <div className="col-5">

                                        </div>
                                        <div className="col-1">
                                            <h6>Posted By:</h6>
                                            <h6>{routeTile.postedBy.username}</h6>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
            </div>
        </>
        }

    } else {
    return (
        <>
            <div className="pb-10">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h3>Popular routes on this network:</h3>
                </div>
                <div className="d-flex row container-fluid justify-content-center">
                    {routeInfo && routeInfo.map(routeTile =>
                        <div className="p-1 mb-2 container-fluid row bg-info rounded">
                            <h5>{routeTile.routeName}</h5>
                            <div className="row">
                                <div className="col-3">
                                    <h6>Start: {routeTile.origin.stationName}</h6>
                                    <h6>Bikes available: {routeTile.origin.bikes}</h6>
                                </div>
                                <div className="col-3">
                                    <h6>End: {routeTile.destination.stationName}</h6>
                                    <h6>Docks available: {routeTile.destination.docks}</h6>
                                </div>
                                <div className="col-5">

                                </div>
                                <div className="col-1">
                                    <h6>Posted By:</h6>
                                    <h6>{routeTile.postedBy.username}</h6>
                                </div>
                            </div>
                        </div>)}
                </div>
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center pb-5">
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
}

export default DetailsRoute;
