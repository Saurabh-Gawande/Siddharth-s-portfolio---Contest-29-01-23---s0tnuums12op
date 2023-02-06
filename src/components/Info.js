import React from "react";
import {  useHistory } from "react-router-dom";

const Info = () => {
    const history = useHistory();
    
    function blog(){
     history.push("/blog");
    }
    function home(){
     history.push("/");
    }

    return (
        <div id="info-page">


            <h1> Info page </h1>
            <h2>I am born in India</h2>
            <h2>and I like to play Cricket </h2>
             <button id="info-to-blog" onClick={blog}> Go to Blog</button>
            <button id="info-to-home" onClick={home}> Go to Home</button>
        </div>
    )
}
export default Info