import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Hero from "../views/Hero";


const AppRoutes = () => {

    //<Route path="/chamado/cadastro/:machineId/:docCompany" element={<CreateChamado></CreateChamado>}></Route>

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/heroi/:idCharacter" element={<Hero></Hero>}></Route>
            </Routes>
        </Router>
    )

}


export default AppRoutes