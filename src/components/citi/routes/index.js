import React from "react";
import {Link} from "react-router-dom";
import routes from "./routes.json";

import RouteItem from "./routeItem.js";

const RouteSummary = () => {
    return(
      <>
      <ul>
      {routes.map(routes => {
                return(
                <>
                <li key={routes._id} className={`list-group-item`}>
                    <RouteItem routes={routes}/>
                </li>
                </>
                );
                }
            )
         }
      </ul>
      </>
    );

}
export default RouteSummary;