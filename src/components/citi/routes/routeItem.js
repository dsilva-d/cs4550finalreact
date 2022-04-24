import React from "react";
import routes from "./routes.json";

const RouteItem = ({routes}) => {
    return(
    <>
        <ul className={`list-group list-group-horizontal`}>
            <li key={routes._id} className={`list-group-item col-10`} style={{"border": "none"}}>
                <div className={`wd-trending`}>
                    <span style={{"float":"left"}}>{routes.network}</span>
                    <br></br>
                    <p style={{"color":"white"}}><b>{routes.routeName}</b>
                        <span style={{"color":"gray"}}> - {routes.type}</span>
                        <br></br>
                        <span style={{"color":"white"}}><b>{routes.rating}/5</b></span></p>
                </div>
            </li>
        </ul>
    </>
    );
}
export default RouteItem;