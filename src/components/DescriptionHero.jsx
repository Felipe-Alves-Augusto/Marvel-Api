import React, { useEffect, useState } from "react";
import './DescriptionHero.css';
import imgFavorite1 from '../assets/icones/heart/heart.png';
import imgFavorite2 from '../assets/icones/heart/heart-favorite.png'
import ComicsHero from "./ComicsHero";
import { useParams } from "react-router-dom";
import { getComicsCharacter, getOneCharacter } from "../api/MarvelsApi";
import ratingImg from '../assets/review/ratingFive.png'
import FormatDate from "../utils/FormatDate";
import Container from "../utils/Container";
import Flex from "../utils/Flex";
import { hydrateRoot } from "react-dom/client";

export default () => {

    const { idCharacter } = useParams();
    const [character, setCharacter] = useState([]);
    const [lastComic, setLastComic] = useState([]);
    const [isCharacterFavorite, setIsCharacterFavorite] = useState(false);


    console.log(isCharacterFavorite)

    useEffect(() => {

        const getCharacterFavoriteStorage = localStorage.getItem('charactersFavorites')

        if (getCharacterFavoriteStorage) {
            const favoriteParse = JSON.parse(getCharacterFavoriteStorage);
            
            favoriteParse.some(fav => {
                if(fav.id == idCharacter){
                    setIsCharacterFavorite(true);
                }
                
            });
            
            
        }

        const getData = async () => {

            try {
                const characterData = await getOneCharacter(idCharacter);
                console.log('um heroi', characterData);
                setCharacter(characterData);

            } catch (error) {
                console.log(error);
            }


        }

        const getLastComic = async () => {
            try {
                const comic = await getComicsCharacter(idCharacter);
                setLastComic(comic[0]);
            } catch (error) {
                console.log(error);
            }

        }

        getData();
        getLastComic();


    }, [])



    return (
        <main className="hero">

            <Container>
                <Flex>
                    <article className="description-hero">
                        <Flex>
                            <h1>
                                {character[0] &&
                                    character[0].name
                                }

                            </h1>
                            <div className="btn-favorite">

                                {isCharacterFavorite ?
                                    <img src={imgFavorite2} />

                                    :
                                    <img src={imgFavorite1} />
                                }

                            </div>
                        </Flex>

                        <div className="text-hero">

                            {character[0] &&
                                <p>{character[0].description}</p>
                            }

                        </div>

                        <div className="comics">
                            <Flex>
                                {character[0] &&
                                    <ComicsHero
                                        title="Quadrinhos"
                                        icon={<svg width="28px" height="31px" viewBox="0 0 28 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <title>Group@1,5x</title>
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Guide" transform="translate(-303.000000, -823.000000)" fill="#FF0000" fill-rule="nonzero">
                                                    <g id="Group" transform="translate(303.000000, 823.000000)">
                                                        <path d="M10.4102564,0 C8.61538462,7.04545374 6.1025641,8.80681718 0,10.9204533 L0,15.8522744 L12.9230769,31 L12.9230769,26.4204551 C18.3076923,24.6590916 21.5384615,20.7840921 23.6923077,16.2045471 L10.4102564,0 Z M13.2820513,31 C20.1025641,29.2386366 24.7692308,27.4772731 26.9230769,26.4204551 L26.9230769,22.5564464 C23.6026933,25.1532598 17.2728338,28.7945968 13.2820513,30.2954546 L13.2820513,31 Z M14,1.76135991 L13.3269231,2.4218712 L24.2532051,15.7531801 C24.4190764,15.9569699 24.4552682,16.2543937 24.3429487,16.4907687 C22.1558005,21.1411204 18.8094021,25.2727507 13.2820513,27.1250004 L13.2932513,27.917614 C19.036841,26.5085232 23.3333154,21.4886374 27.2820333,16.9090925 L13.9999821,1.76135991 L14,1.76135991 Z M11.3076744,5.16299305 L14.1794692,8.33344723 C14.3612395,8.53687062 14.4070913,8.84734263 14.2916487,9.09303522 C12.8056528,12.3741101 10.8425836,14.3136037 7.8637641,15.7751972 C7.58186513,15.9147676 7.20790359,15.8432563 7,15.610087 L3.76923077,12.0873531 C3.44875282,11.7336361 3.64255231,11.0743401 4.10576923,10.9424668 C7.57774769,9.92031944 8.70825128,8.80465423 10.1073718,5.37215496 C10.5250744,4.837789 10.7802692,4.82200366 11.3076744,5.16299305 Z M10.9375,6.8803224 C9.71289128,9.43498631 8.15512205,10.9250786 5.53044872,11.9002082 L7.68429487,14.2450233 C10.0177467,13.0098953 11.5234467,11.5116937 12.7772436,8.91689887 L10.9375,6.8803224 Z M26.3060897,19.1217877 C22.9835595,22.9051259 18.0500026,27.3454879 13.2820513,28.8863639 L13.2820513,29.5909093 C18.6666667,28.1818185 23.6923077,24.3068189 28,20.7840921 L26.3060897,19.1217877 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>}
                                        number={character[0].comics.available}
                                    ></ComicsHero>
                                }


                                {character[0] &&
                                    <ComicsHero
                                        title="Filmes"
                                        icon={<svg width="30px" height="31px" viewBox="0 0 30 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <title>Shape@1,5x</title>
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Guide" transform="translate(-384.000000, -828.000000)" fill="#FF0000" fill-rule="nonzero">
                                                    <path d="M411.615,828 L386.385,828 C385.752459,828 385.145825,828.258584 384.69855,828.718866 C384.251276,829.179148 384,829.803425 384,830.454362 L384,848.545638 C384,849.901145 385.067801,851 386.385,851 L411.615,851 C412.932199,851 414,849.901145 414,848.545638 L414,830.454362 C414,829.098855 412.932199,828 411.615,828 Z M388.994709,846.613596 C388.994709,846.827001 388.824151,847 388.613757,847 L385.380952,847 C385.170558,847 385,846.827001 385,846.613596 L385,844.386404 C385,844.172999 385.170558,844 385.380952,844 L388.619048,844 C388.829442,844 389,844.172999 389,844.386404 L388.994709,846.613596 Z M388.994709,840.613596 C388.994709,840.827001 388.824151,841 388.613757,841 L385.380952,841 C385.170558,841 385,840.827001 385,840.613596 L385,838.386404 C385,838.172999 385.170558,838 385.380952,838 L388.619048,838 C388.829442,838 389,838.172999 389,838.386404 L388.994709,840.613596 Z M388.994709,834.612903 C388.994709,834.826691 388.824151,835 388.613757,835 L385.380952,835 C385.170558,835 385,834.826691 385,834.612903 L385,832.376344 C385.005731,832.166767 385.174622,831.999919 385.380952,832 L388.619048,832 C388.829442,832 389,832.173309 389,832.387097 L388.994709,834.612903 Z M402.569953,840.819144 L396.337568,844.863018 C396.064804,845.040849 395.724577,845.045863 395.447433,844.876137 C395.170289,844.70641 394.999272,844.388302 395,844.043874 L395,835.956126 C394.999272,835.611698 395.170289,835.29359 395.447433,835.123863 C395.724577,834.954137 396.064804,834.959151 396.337568,835.136982 L402.569953,839.180856 C402.836658,839.35299 403,839.66412 403,840 C403,840.33588 402.836658,840.64701 402.569953,840.819144 Z M413,846.613596 C413,846.827001 412.829216,847 412.618543,847 L409.381457,847 C409.170784,847 409,846.827001 409,846.613596 L409,844.386404 C409,844.172999 409.170784,844 409.381457,844 L412.618543,844 C412.829216,844 413,844.172999 413,844.386404 L413,846.613596 Z M413,840.613596 C413,840.827001 412.829216,841 412.618543,841 L409.381457,841 C409.170784,841 409,840.827001 409,840.613596 L409,838.386404 C409,838.172999 409.170784,838 409.381457,838 L412.618543,838 C412.829216,838 413,838.172999 413,838.386404 L413,840.613596 Z M413,834.614286 C413,834.82731 412.829216,835 412.618543,835 L409.381457,835 C409.170784,835 409,834.82731 409,834.614286 L409,832.385714 C409,832.17269 409.170784,832 409.381457,832 L412.618543,832 C412.829216,832 413,832.17269 413,832.385714 L413,834.614286 Z" id="Shape"></path>
                                                </g>
                                            </g>
                                        </svg>}
                                        number={character[0].series.available}
                                    ></ComicsHero>
                                }

                            </Flex>

                        </div>

                        <div className="rating-hero">
                            <p className="subtitle">Rating:</p>
                            <img src={ratingImg} />
                        </div>

                        {lastComic && lastComic.dates &&
                            <FormatDate dateString={lastComic.dates[0].date}></FormatDate>
                        }
                    </article>

                    <div className="img-big-hero">
                        {character[0] &&
                            <img src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`} />
                        }

                    </div>
                </Flex>
            </Container>
        </main>
    )

}