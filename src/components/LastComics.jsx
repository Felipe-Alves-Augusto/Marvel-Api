import React, { useContext, useEffect, useState } from "react";
import './LastComics.css';
import CardLastComics from "./CardLastComics";
import { getComicsCharacter } from "../api/MarvelsApi";
import { useParams } from "react-router-dom";
import Container from "../utils/Container";
import Flex from "../utils/Flex";





const LastComics = () => {

    const [comics, setComics] = useState([]);
    const { idCharacter } = useParams();

    useEffect(() => {

        const getDataComics = async () => {
            try {
                const comicsCharacter = await getComicsCharacter(idCharacter);
                console.log('comics', comicsCharacter);
                setComics(comicsCharacter);
            } catch (error) {
                console.log(error);
            }
        }

        getDataComics();

    }, []);

    return (
        <div className="last-comics">
            <Container>
                <h2>Últimos lançamentos</h2>
                <Flex>
                    {comics.map((comic) =>
                        <CardLastComics comicImg={comic.images[0].path} extension={comic.images[0].extension} name={comic.title}></CardLastComics>
                    )}
                </Flex>
            </Container>




        </div>
    )

}

export default LastComics;