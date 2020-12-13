import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Explore.css';

const Explore = () =>{
    return(
        <div className="div_style">
                <div className="city"><h1 className="city">Explore our Seoul.</h1></div>
                <div className="explore"><a href="#"><button className="bttn">Explore</button></a></div>
        </div>
    )
}
export default Explore;