import React from "react";
import Header from '../components/Header'
import Actions from '../components/Actions'
import ListHero from '../components/ListHero';
import '../App.css'

const Home = () => {

    return (
        <React.Fragment>
            <Header></Header>
            <Actions></Actions>
            <ListHero></ListHero>
            <footer></footer>
        </React.Fragment>
    )

}


export default Home