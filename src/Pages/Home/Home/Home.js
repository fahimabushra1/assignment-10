import React from "react";
import Header from "../../Shared/Header/Header";
import Gallary from "../Gallary/Gallary";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Gallary></Gallary>
        </>
    )

}

export default Home;