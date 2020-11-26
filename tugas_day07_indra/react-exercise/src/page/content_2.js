import React from 'react'
import "./page.css";
import { Link } from "react-router-dom";

class Content2 extends React.Component{
    render(){
        return(
            <div className="home">
            <h1>This is Link Page</h1>
            <h4>
                <Link to="/home" className="link">To Home Page</Link>
            </h4>
        </div>
        )
    }
}

export default Content2