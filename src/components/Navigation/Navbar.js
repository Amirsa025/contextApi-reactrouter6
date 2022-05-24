import React from 'react';
import { NavLink } from 'react-router-dom'
import {navigationItems} from '../../config/navigation'
import {useAuth} from "../Authentication/Auth";
const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    const auth =useAuth();
    return (
        <nav className="primary-nav">
            {navigationItems.navigation.map((nav,id)=>(<NavLink to={nav.to} key={nav.text} style={navLinkStyles}>{nav.name}</NavLink>))}
            {
                !auth.user && (
                    <NavLink to={'/login'} >
                       login
                    </NavLink>
                )
            }
        </nav>
    );
};

export default Navbar;
