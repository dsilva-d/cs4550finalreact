import React from "react";

const Search = (
    {
        route = {
            "_id": {"$oid": "626580229171835d434d2349"},
            "network": "test-network",
            "origin": {"stationName": "test-origin-station", "bikes": 5},
            "destination": {"stationName": "test-destination-station", "docks": 8},
            "routeName": "Test Route",
            "type": "Commuting",
            "rating": {"$numberInt": "3"},
            "postedBy": {"username": "test-user", "uid": "12345"}
        },
    }) => {
    // const dispatch = useDispatch();

    return <li className={`list-group-item`}>
        <>
            <div className={`row`}>
                <div className={`col-2`}>
                </div>
                <div className={`col-10 `}>
                    <p className={`p-0 m-0`}>
                        <p className={`text-secondary`}>
                            <span
                                className={`text-white fw-bold`}>{route.routeName}</span>
                        </p>
                    </p>
                    <p className={`fw-bold p-0 m-0`}>{route.origin.stationName} -> {route.destination.stationName}</p>
                    <div className={"row"}>
                        <div className={`col-2`}>
                            <span className={`d-none d-lg-block`}><i
                                className={`fa-solid fa-message`}/> {route.type}</span>
                        </div>
                        {/*<div className={`col-3`}>*/}
                        {/*    Likes: {tuit.likes}*/}
                        {/*    <i onClick={() => updateTuit(dispatch, {*/}
                        {/*        ...tuit,*/}
                        {/*        likes: tuit.likes + 1*/}
                        {/*    })} className="far fa-thumbs-up ms-2"/>*/}
                        {/*</div>*/}
                        {/*<div className={`col-4`}>*/}
                        {/*    Dislikes: {tuit.dislikes}*/}
                        {/*    <i onClick={() => updateTuit(dispatch, {*/}
                        {/*        ...tuit,*/}
                        {/*        dislikes: tuit.dislikes + 1*/}
                        {/*    })} className="far fa-thumbs-down ms-2"/>*/}
                        {/*</div>*/}
                        {/*<div className={`col-1`}>*/}
                        {/*    <i className={`fa-solid fa-share-from-square`}/>*/}
                        {/*</div>*/}
                        {/*<div className={"col-1"}>*/}
                        {/*    <i className="fas fa-remove float-end"*/}
                        {/*       onClick={() => deleteRoute(*/}
                        {/*           dispatch, route)}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    </li>
}
// return (
//   <a href="search.html"
//   className={`btn btn-primary btn-block rounded-pill`}>
//   Search <i className={`fa fa-solid fa-search`}/> </a>
// );

export default Search;