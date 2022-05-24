import React from 'react';
import MainRoutes from "./Routes/Routes";
import Navbar from "./components/Navigation/Navbar";
import {AuthProvider} from "./components/Authentication/Auth";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
          <MainRoutes/>
        </AuthProvider>
    );
};

export default App;
