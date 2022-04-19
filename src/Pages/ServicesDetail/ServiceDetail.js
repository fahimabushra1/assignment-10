import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceContext } from "../../App";



const ServiceDetail = () => {
    const { id } = useParams()
    console.log(id)
    const [services, setServices] = useContext(ServiceContext)
    // console.log(services)
    const service = services.find((service) => service.id = id)
    console.log(service)

    return (
        <div>
            <div className="d-flex justify-conten-center text-success">
                <img src={service?.img}></img>
                <div className="ms-2">
                    <h1>{service?.name}</h1>
                    <p>Tour-location: {service?.location}</p>
                    <p>Tour-duration: {service?.duration}</p>
                    <p>Tour-time: {service?.time}</p>
                    <p>Tour-availability: {service?.availability}</p>
                    <p>Price: {service?.price}</p>
                    <p>Inclusion: {service?.inclusion}</p>
                    <p>Exclusion: {service?.exclusion}</p>
                    <p>{service?.description}</p>
                </div>
            </div>
            <div className="text-center">
                <Link to='/checkout'><button className="btn btn-success mb-5 mt-4">Checkout</button></Link>
            </div>
        </div >
    )
}

export default ServiceDetail;