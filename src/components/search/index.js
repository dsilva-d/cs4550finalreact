import Results from "./filteredResults"
import {useEffect, useRef, useState} from "react";

const Search = () => {
    const [city, setCityName] = useState('Boston, MA')
    const userInputCityName = useRef()
    return <>
        <ul className="list-group">
            <div className="input-group input-group-lg pt-2">
                {/*<input type="text" className="form-control" placeholder="Enter a city"*/}
                {/*       aria-label="Location" aria-describedby="basic-addon2"/>*/}
                {/*<a href="search" className="btn btn-primary" onClick={searchCity} type="button" id="button-addon2">Find Routes</a>*/}
                <button
                    onClick={() => setCityName(userInputCityName.current.value)}
                    className="btn btn-primary float-end">
                    Search
                </button>
                <input ref={userInputCityName}
                       className="form-control w-75"/>
            </div>
            <div>
                <Results cityName={city}/>
            </div>
        </ul>
    </>

}

export default Search;