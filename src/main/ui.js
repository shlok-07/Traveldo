import React from 'react'
import Map from './Map';
import Search from './Search';
import '../uicomponent/ui.css';

import {
    Routes,
    Route,
} from "react-router-dom";
import Searchpage from '../searchcomnpnent/Searchpage';
// import Home from '../searchcomnpnent/Home';


function ui() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Search />}/>
                <Route path="/searchpage" element={<Searchpage/>}/>
                <Route exact path="/map" element={<Map />} />
            </Routes>
        </>
    )
}

export default ui;