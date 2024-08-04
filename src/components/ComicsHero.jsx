import React from "react";
import './DescriptionHero.css'


export default (props) => {

    return (

        <div className="HQ">
            <p className="subtitle">{props.title}</p>
            <div className="amount-comics">
                <div className="icon">
                    {props.icon}
                </div>
                <div className="number">
                    <p className="subtitle">{props.number}</p>
                </div>
            </div>
        </div>


    )

}