import React, { useRef } from "react";
import './CardHero.css';
import imgFavorite1 from '../assets/icones/heart/heart.png'
import imgFavorite2 from '../assets/icones/heart/heart-favorite.png'

export default (props) => {



    return (
        <div key={props.id} className="card-hero">
            <a href={`/heroi/${props.id}`} className="thumbnail">

                <img src={`${props.thumbnail}.${props.extension}`}/>
            </a>
            <div className="line"></div>
            <div className="name">
                <p>{props.name}</p>
                <button onClick={props.click} className="btn-favorite-hero">
                    {!props.favorite ?
                        <img src={imgFavorite1} />
                    :
                        <img src={imgFavorite2} />
                    }
                    
                </button>
            </div>
        </div>
    )

}