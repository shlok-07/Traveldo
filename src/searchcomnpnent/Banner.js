import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@mui/material";
import Searchdate from './Searchdate';

import {
  Link
} from "react-router-dom"; 

function Banner() {

  const [showsearch, setshowsearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner__search'>
        {showsearch && <Searchdate />}
        <Button variant='outlined' className='banner__searchbutton' onClick={() => setshowsearch(!showsearch)}>
          {showsearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>
          Get out and stretch your imagination
        </h1>
        <h5 >
          Plan a diffrent kind of getaway to uncover the hidden gems near you.
        </h5>
        <div className='divbutn'>
          <Link className='but' to="/searchpage"> <Button   >
            Explore Nearby
          </Button></Link>
          <Link to="/map"><button className='butn'>Map</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Banner