import {Outlet} from "react-router-dom";

import Search from "./search";
import Profile from "./profile";

const Citi = () => {
  return (
    <Search/>
    <Outlet/>
  );
};
export default Citi;