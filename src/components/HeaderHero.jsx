import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import './HeaderHero.css'
import ResultPageHero from "./ResultSearchPageHero";
import Flex from "../utils/Flex";

const HeaderHero = () => {



    return (
        <header className="header-hero">
            <div className="container">
                <Flex>
                    <Logo></Logo>
                    <Search></Search>
                    <ResultPageHero></ResultPageHero>
                </Flex>
                <div className="wrapper-header-hero">

                </div>
            </div>

        </header>
    )

}

export default HeaderHero;