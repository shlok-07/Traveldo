import React, { useState } from 'react';
import './Searchdate.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';


function Searchdate() {
    const navigate = useNavigate();
    const [startdate,setstartdate]=useState(new Date());
    const [enddate,setenddate]=useState(new Date());

    const selectionRange={
        startdate:startdate,
        enddate:enddate,
        Key:"selection",
    };

    function handleSelect(ranges){
        setstartdate(ranges.selection.startdate);
        setenddate(ranges.selection.enddate);
    }

  return (
    <div className='searchdate'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
            Number of guests<searchIcon/>
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button className='searchbutton' onClick={()=>navigate('./searchpage')}>Search hotels</Button>
    </div>
  )
}

export default Searchdate;