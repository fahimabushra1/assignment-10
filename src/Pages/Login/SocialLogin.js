import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/social/google.png"


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className="text-danger">Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="w-50 bg-success"></div>
                <div className="mt-2 px-2">or</div>
                <div style={{ height: '1px' }} className="w-50 bg-success"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-success d-block w-50 mx-auto mt-2"><img style={{ width: '30px' }} src={google} alt="" /> Google sign in</button>
            </div>

        </div>
    )

}

export default SocialLogin;