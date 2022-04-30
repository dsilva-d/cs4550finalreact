import Results from "./filteredResults"
import {useEffect, useRef, useState} from "react";
import {useParams, Link} from "react-router-dom";

const Search = () => {
    const {currentcity} = useParams();
    const storedCity = localStorage.getItem('city')
    const [city, setCityName] = useState(storedCity)
    const [nextCity, setNextCity] = useState('/')
    const userInputCityName = useRef()

    useEffect(() => {
        localStorage.setItem('city', city)
    }, [city])

    return <>
        <ul className="list-group">
            <div className="input-group input-group-lg pt-2">
                {/*<input type="text" className="form-control" placeholder="Enter a city"*/}
                {/*       aria-label="Location" aria-describedby="basic-addon2"/>*/}
                {/*<a href="search" className="btn btn-primary" onClick={searchCity} type="button" id="button-addon2">Find Routes</a>*/}
                <Link to={'/search' + nextCity} onClick={() => setCityName(userInputCityName.current.value)}>
                    <button className="btn btn-primary float-end">
                        Search
                    </button>
                </Link>
                <input ref={userInputCityName}
                       onChange={event => setNextCity('/' + event.target.value)}
                       className="form-control w-75"/>
            </div>

            <div>
                <Results cityName={city}/>
            </div>
        </ul>
    </>

}

export default Search;