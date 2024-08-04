import React from "react";
import logo from '../assets/logo/logo.png'
import { Link } from "react-router-dom";


export default () => {

    return (
        <div className="logo">
            <Link to={'/'}>
                <img src={logo} />
            </Link>

        </div>
    )

}