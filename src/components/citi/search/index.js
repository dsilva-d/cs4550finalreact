import React from "react";
import {Link} from "react-router-dom";

const Search = () => {
  return (
    <a href="search.html"
    className={`btn btn-primary btn-block rounded-pill`}>
    Search <i className={`fa fa-solid fa-search`}/> </a>
  );
}
export default Search;