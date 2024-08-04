import React, { useContext, useEffect, useState } from "react";
import CardHero from "./CardHero";
import AppContext from "../context/AppContext";
import Container from "../utils/Container";
import Flex from "../utils/Flex";



const ListHero = () => {


    const [favorites, setFavorites] = useState([]);

    const { isFavoriteFilter, filteredCharacters } = useContext(AppContext);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('charactersFavorites');

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }

    }, [])


    useEffect(() => {

        if (favorites.length > 0) {
            localStorage.setItem('charactersFavorites', JSON.stringify(favorites));
        }

    }, [favorites]);

    console.log('favoritos', favorites)



    const toggleFavorite = (character) => {
        if (favorites.some(fav => fav.id === character.id)) {
            setFavorites(favorites.filter(fav => fav.id !== character.id));

        } else {
            if (favorites.length == 5) {
                alert('já tem 5 favoritos');
            } else {

                setFavorites([...favorites, character]);

            }
        }
    }



    return (
        <main className="list-hero">
            <Container>
                <Flex>
                    {isFavoriteFilter ?
                        favorites.length ?

                            favorites.map((characterFavorite =>
                                <CardHero
                                    thumbnail={characterFavorite.thumbnail.path}
                                    extension={characterFavorite.thumbnail.extension}
                                    name={characterFavorite.name}
                                    click={() => toggleFavorite(characterFavorite)}
                                    id={characterFavorite.id}
                                    favorite={favorites.some(fav => fav.id === characterFavorite.id)}
                                ></CardHero>

                            ))
                            :
                            <p className="empty-favorite">Nenhum personagem favorito encontrado.</p>

                        :

                        filteredCharacters.map(character =>
                            <CardHero
                                thumbnail={character.thumbnail.path}
                                extension={character.thumbnail.extension}
                                name={character.name}
                                click={() => toggleFavorite(character)}
                                id={character.id}
                                favorite={favorites.some(fav => fav.id === character.id)}
                            ></CardHero>
                        )

                    }
                </Flex>

            </Container>


        </main>
    )

}

export default ListHero;