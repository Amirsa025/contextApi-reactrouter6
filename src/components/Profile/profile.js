import React from 'react';
import {useAuth} from "../Authentication/Auth";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const Auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = ()=>{
        Auth.logout();
        navigate('/')
    }
    return (
        <div style={{Color: 'red'}}>
            Welcome {Auth.user} .<button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
