import React from "react";
import { Carousel } from "react-bootstrap";
import deer from "../../../../images/banner/deer.jpg";
import heron from "../../../../images/banner/heron.jpg";
import sundarban from "../../../../images/banner/sundarban.jpg";
import tiger from "../../../../images/banner/tiger.jpg";
import shatGombuj from "../../../../images/banner/shat-gombuj.jpg";

const Banner = () => {
    return (
        <div className="container mt-4 bor">
            <div className="carousel-container w-100">
                <Carousel>
                    <Carousel.Item>
                        <img width="200px" height="450px"
                            className="d-block w-100"
                            src={sundarban}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Sundarban</h1>
                            <p className="fs-3">Experience the largest mangrove forest on earth.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="450px"
                            className="d-block w-100"
                            src={deer}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Chitra Horin</h1>
                            <p className="fs-3">One of the most beautiful animal in Sundarban.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="450px"
                            className="d-block w-100"
                            src={tiger}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Royal Bangal Tiger</h1>
                            <p className="fs-3">The king of the Sundarban</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="450px"
                            className="d-block w-100"
                            src={heron}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Heron</h1>
                            <p className="fs-3">There are different types of birds live in this forest.Heron is most common among them</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="450px"
                            className="d-block w-100"
                            src={shatGombuj}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Shat Gombuj Mosque</h1>
                            <p className="fs-3">It is one of the world heritage site</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )

}

export default Banner;