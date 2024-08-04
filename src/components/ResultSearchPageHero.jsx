import React, { useContext, useEffect, useRef } from "react";
import './ResultSearchPageHero.css'
import AppContext from "../context/AppContext";

const ResultPageHero = () => {

    const { filteredCharacters, searchTerm } = useContext(AppContext);



    return (
        <React.Fragment>
            {searchTerm &&
                <div className="search-result">
                <div className="wrapper-result">

                    {filteredCharacters.map((character) =>
                        <a href={`/heroi/${character.id}`} className="card-result-search">
                            <div className="img-result">
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            </div>
                            <div className="name-result">
                                <p>{character.name}</p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
            }
            
        </React.Fragment>

    )

}

export default ResultPageHero