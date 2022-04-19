import React from "react";


const Checkout = () => {
    return (
        <div className='w-50 mx-auto text-success'>
            <h4 className="mt-3">Personal Detail</h4>
            <div className="d-flex">
                <div className="form-check me-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Mr
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Mrs
                    </label>
                </div>
            </div>
            <p>Your full Name(According to your passport)</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Nationality</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Billing adress of credit card(no cc detail required)</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <h4 className="mt-3">Contact Details</h4>
            <p>Your Email</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Your Mobile Number(with + and country code)</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <h4>Tour Detail</h4>
            <p>Holiday Package</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Tour Date</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Number of peaple</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Full name of other peaple in your group with Mr/Mrs(if any)</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>Preferred room type:</p>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    singal
                </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    couple
                </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    twin
                </label>
            </div>
            <p>Join with other to reduce cost(if available)</p>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    No
                </label>
            </div>
            <p>Promo code(if any)</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <p>How did you first hear about us</p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"></span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button className="btn btn-success mb-5 mt-2">Checkout</button>
        </div>
    )

}

export default Checkout;