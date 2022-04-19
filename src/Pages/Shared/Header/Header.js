import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="d-flex justify-content-end mb-5 mt-2">
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/' >Home</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/blogs'>Blogs</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/about'>About</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/signup'>Signup</NavLink>
            <NavLink className={'me-5 text-decoration-none text-success fw-bold'} to='/login'>Login</NavLink>
        </nav>
    )

}

export default Header;