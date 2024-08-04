import React, { useContext, useEffect, useState } from "react";
import './LastComics.css';
import CardLastComics from "./CardLastComics";
import { useParams } from "react-router-dom";
import Container from "../utils/Container";
import Flex from "../utils/Flex";
import AppContext from "../context/AppContext";


const LastComics = () => {

    const { comics, setComics } = useContext(AppContext);
    const { idCharacter } = useParams();

    

    useEffect(() => {

        const getDataComics = async () => {
            const comicsData = localStorage.getItem(`character_comics_${idCharacter}`);
            if (comicsData) {
                setComics(JSON.parse(comicsData)); // Armazena o objeto diretamente
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
                        <CardLastComics comicImg={comic.thumbnail.path} extension={comic.thumbnail.extension} name={comic.title}></CardLastComics>
                    )}
                </Flex>
            </Container>




        </div>
    )

}

export default LastComics;