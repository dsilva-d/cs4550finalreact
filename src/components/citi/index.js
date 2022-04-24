import {Outlet} from "react-router-dom";

import Search from "./search";
import Profile from "./profile";
import RouteSummary from "./routes";

const Citi = () => {
  return (
    <div className="row mt-2">
                <div className="col-2">
                    <Search/>
                </div>
                <div className="col-8">
                    <h1 style={{justifyContent: 'center', alignItems: 'center'}}>
                        Cycle!
                    </h1>
                    <RouteSummary/>
                    <Outlet/>

                </div>
                <div className="col-2">
                    <Profile/>
                </div>
            </div>
  );
};
export default Citi;