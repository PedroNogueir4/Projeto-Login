import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"


function MyRoutes() {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>

    )
}

export default MyRoutes