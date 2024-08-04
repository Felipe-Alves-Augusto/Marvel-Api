import React from "react";
import HeaderHero from "../components/HeaderHero";
import DescriptionHero from "../components/DescriptionHero";
import LastComics from "../components/LastComics";


const Hero = () => {

    return (
        <React.Fragment>
            <HeaderHero></HeaderHero>
            <DescriptionHero></DescriptionHero>
            <LastComics></LastComics>
            <footer></footer>
        </React.Fragment>
    )

}


export default Hero