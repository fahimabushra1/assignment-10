import { Button } from "bootstrap";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";


const Header = () => {

    const [user] = useAuthState(auth)

    const handlesignOut = () => {
        signOut(auth)
    }
    return (
        <nav className="d-flex justify-content-end mb-5 mt-2">
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/' >Home</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/blogs'>Blogs</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/about'>About</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/signup'>Signup</NavLink>
            {
                user ?
                    <button className="btn btn-success me-5" onClick={handlesignOut}>logout</button>
                    :
                    <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/login'><button className="btn btn-success">login</button></NavLink>
            }
        </nav>
    )

}

export default Header;