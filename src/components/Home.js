import React from 'react'
import {  useHistory } from 'react-router-dom'
const Home = () => {
   const history = useHistory();
    
   function blog(){
    history.push("/blog");
   }
   function info(){
    history.push("/info");
   }

    return (
        <div id='home-page'>

            <h1>Home page</h1>
            <h2>Hi, my name is Siddharth </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
           <button id="home-to-blog" onClick={blog}> Go to Blog</button>
            <button id="home-to-info" onClick={info}> Go to Info</button>

        </div>
    )
}
export default Home