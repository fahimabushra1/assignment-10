import React from "react";
import tourist1 from '../../../images/gallary/tourist-1.jpg'
import tourist2 from '../../../images/gallary/tourist-2.jpg'
import tourist3 from '../../../images/gallary/tourist-3.jpg'

const Gallary = () => {
    return (
        <div>
            <h2 className="text-center mt-5 text-success">Photo's From Traveller</h2>
            <div>
                <img className="me-4 ms-5" width={300} src={tourist1}></img>
                <img className="me-4" width={300} src={tourist2}></img>
                <img width={400} src={tourist3}></img>
            </div>
            <button className="text-white bg-success mt-4 mx-auto d-block">see more</button>

        </div>
    )
}

export default Gallary;