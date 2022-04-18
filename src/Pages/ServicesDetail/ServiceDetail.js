import React, { useContext } from "react";
import { useParams } from "react-router-dom";
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
            <img src={service?.img}></img>
            <h1>{service?.name}</h1>
            <h3>Tour-location: {service?.location}</h3>
            <h4>Tour-duration: {service?.duration}</h4>
            <h4>Tour-time: {service?.time}</h4>
            <h4>Tour-availability: {service?.availability}</h4>
            <h4>Price: {service?.price}</h4>
            <h4>Inclusion: {service?.inclusion}</h4>
            <h4>Exclusion: {service?.exclusion}</h4>
            <p>{service?.description}</p>

        </div>
    )
}

export default ServiceDetail;