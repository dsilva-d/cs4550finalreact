import routes from "../data/routes.json"
import RouteItem from "../routes/routeItem.js"

const routeReducer = (state = routes, action) => {
  switch (action.type) {
    default:
        return routes;
  }
};

export default routeReducer;