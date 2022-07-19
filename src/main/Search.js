import Home from "../searchcomnpnent/Home";
import Header from "../searchcomnpnent/Header";
import Footer from "../searchcomnpnent/Footer";
import { Link } from "react-router-dom";
import React from 'react';
// import {
//      Routes, Route
// } from "react-router-dom";
// import Searchpage from "../searchcomnpnent/Searchpage";


function Search() {
    return (
        <div className="search">
            <Header />
            <Home/>
            <Footer />
        </div>
    );
}
export default Search;