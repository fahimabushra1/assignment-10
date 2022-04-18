import React from "react";
import useServices from "../../../hooks/useServices";


const Services = () => {
    const [services, setServices] = useServices()

    return (
        <div className="md:grid grid-cols-3 gap-4 text-center">
            {
                services.map(service => <Home
                    key={service.id}
                    service={service}
                ></Home>)
            }
        </div>
    )

}

export default Services;