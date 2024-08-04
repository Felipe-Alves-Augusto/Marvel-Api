import React from "react";
import './LastComics.css'

export default (props) => {

    return (
        <div className="card-last-comics">
            <div className="img-comics">
                <img src={`${props.comicImg}.${props.extension}`} />
            </div>
            <div className="name-comics">
                <p>{props.name}</p>
            </div>
        </div>

    )

}