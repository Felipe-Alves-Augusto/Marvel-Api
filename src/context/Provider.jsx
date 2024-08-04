import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { getCharacters, getComicsCharacter } from "../api/MarvelsApi";
import { useParams } from "react-router-dom";


const Provider = (props) => {

    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);

  


    // filtro do toggle
    const toggleFilter = () => {
        setIsFavoriteFilter(!isFavoriteFilter);
    };
   


    // trazendo a listagem dos herois
    useEffect(() => {
        const getData = async () => {

            const storedCharacters = localStorage.getItem('characters');
            if (storedCharacters) {
                setCharacters(JSON.parse(storedCharacters));
            } else {
                try {
                    const charactersData = await getCharacters();
                    setCharacters(charactersData);

                    localStorage.setItem('characters', JSON.stringify(charactersData));
                } catch (error) {
                    console.error('Error fetching characters:', error);
                }
            }


        }

        getData();

    }, [])


    // filtro de busca pelo nome
    useEffect(() => {

        const charactersSort = characters.sort((a, b) => a.name.localeCompare(b.name)); // ordenando de A/Z
        setFilteredCharacters(
            
            charactersSort.filter(character =>
                character.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, characters]);

    

    

    return (
        <AppContext.Provider value={{
            characters,
            filteredCharacters,
            setSearchTerm,
            searchTerm,
            isFavoriteFilter,
            toggleFilter
            
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Provider;