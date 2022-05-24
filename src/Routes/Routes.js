import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Home from "../components/HOME/home";
import Login from "../components/Login/login";
import Product from "../components/product/product";
import Profile from "../components/Profile/profile";
import RequireAuth from "../components/Authentication/RequireAuth";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='products' element={<Product />}/>
            <Route path='Profile' element={<RequireAuth>
                <Profile />
            </RequireAuth>}/>
        </Routes>
    );
};

export default MainRoutes;
