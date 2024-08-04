import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { getCharacters, getComicsCharacter, getOneCharacter } from "../api/MarvelsApi";


const Provider = (props) => {

    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);
    const [comics, setComics] = useState([]);




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

        // armazenando os detalhes de cada persongem porque a api da marvel está com uma resposta demorada
        useEffect(() => {

            const setHeroDetail = async () => {
                for (const hero of characters) {
                    await getOneCharacter(hero.id);
                    
                }
            }
    
            setHeroDetail();
        }, [])
    
        useEffect(() => {
    
            const storageComics = async () => {
                for (const comics of characters) {
                
                   await getComicsCharacter(comics.id);
                }
            }
    
            storageComics();
        }, [])



    return (
        <AppContext.Provider value={{
            characters,
            filteredCharacters,
            setSearchTerm,
            searchTerm,
            isFavoriteFilter,
            toggleFilter,
            comics,
            setComics

        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Provider;