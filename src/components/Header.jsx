import React from "react";
import './Header.css'
import Logo from "./Logo";
import Search from "./Search";


const Header = () => {

    return (
        <header className="header-home">
            <Logo></Logo>
            <div className="description-header">
                <h1>Explore o universo</h1>
                <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
            </div>

            <Search></Search>
        </header>
    )

}

export default Header;