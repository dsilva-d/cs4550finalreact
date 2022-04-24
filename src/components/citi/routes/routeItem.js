import React from "react";
import routes from "./routes.json";

const RouteItem = ({routes}) => {
    return(
    <>
        <div className={`list-group list-group-horizontal`}>
            <div className={`list-group-item col-10`} style={{"border": "none"}}>
                <div className={`wd-trending`}>
                    <span style={{"float":"left"}}>{routes.network}</span>
                    <br></br>
                    <p style={{"color":"white"}}><b>{routes.routeName}</b>
                        <span style={{"color":"gray"}}> - {routes.type}</span>
                        <br></br>
                        <span style={{"color":"white"}}><b>{routes.rating}/5</b></span></p>
                </div>
            </div>
        </div>
    </>
    );
}
export default RouteItem;