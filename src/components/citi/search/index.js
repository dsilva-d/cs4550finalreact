import React, {useEffect, useState} from "react";
import {findAllRoutesAction} from "../../../actions/routeActions";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {

    const bikeroutes = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {findAllRoutesAction(dispatch)}, [dispatch]);
    console.log(bikeroutes);
        return <>
            <div className={`row`}>
                <div className={`col-2`}>
                </div>
                <div className={`col-10` }>
                    {bikeroutes && bikeroutes.map(bikeroutes =>
                    <>
                    <p className={`p-0 m-0`}>
                        <span
                            className={`text-white fw-bold`}>{bikeroutes.routeName}
                        </span>
                    </p>
                    <p className={`fw-bold p-0 m-0`}>{bikeroutes.origin.stationName} -> {bikeroutes.destination.stationName}</p>
                    </>
                    )}
                </div>
            </div>
        </>
}
// return (
//   <a href="search.html"
//   className={`btn btn-primary btn-block rounded-pill`}>
//   Search <i className={`fa fa-solid fa-search`}/> </a>
// );

export default Search;