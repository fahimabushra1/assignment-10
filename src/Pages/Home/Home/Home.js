import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";



const Home = ({ service }) => {
    const { img, name, description } = service
    return (
        <>
            <Header></Header>
            <Banner></Banner>

        </>
    )

}

export default Home;