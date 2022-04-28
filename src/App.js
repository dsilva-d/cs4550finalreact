import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Search from "./components/search-page";
import Profile from "./components/citi/profile";
import Citi from "./components/citi"

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/">
                <Route index element={<Citi/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
