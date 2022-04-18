import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, img, name, description } = service
    const navigate = useNavigate()

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (

        <div className="card col-sm-12 col-md-6 col-lg-3" style={{ width: 18 + 'rem' }}>
            <img width={200} src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">{description.length < 70 ? description.length : description.slice(0, 60) + "..."}</p>
                <a onClick={() => navigateToServiceDetail(id)} class="btn btn-success">BOOK TOUR</a>
            </div>
        </div>
    )
}

export default Service;