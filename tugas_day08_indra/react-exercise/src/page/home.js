import React from 'react'
import "./page.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <h1>This is Home Page</h1>
                <h4>
                    <Link to="/content_2" className="link">To Link Page</Link>
                </h4>
            </div>
        )
    }
}

export default Home