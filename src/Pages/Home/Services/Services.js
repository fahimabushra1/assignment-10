import React, { useContext } from "react";
import { ServiceContext } from "../../../App";
// import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useContext(ServiceContext)

    return (
        <div id="services" className="container">
            <h2 className="text-success text-center mt-5">Our Services</h2>
            <div className="row">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }

            </div>
        </div>
    )

}

export default Services;