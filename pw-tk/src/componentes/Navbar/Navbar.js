import React from "react";
import {Link} from "react-router-dom";
import Home from "../Home";
import Recipes from "../Recipes";

function Navbar() {
    return (

        <div>
            <h1 className="custom-title">DejateTentar</h1>
            <div className="nav-bar">
                <Link to="/"><h4 className="nav-element nav-hover">Inicio</h4></Link>

                <Link to="/Recipes"> <h4 className="nav-element nav-hover">Recetas</h4></Link>

                <Link to={'/Profile'}><h4 className="nav-element nav-hover">Mi Perfil</h4></Link>
            </div>
        </div>
    );
}
export default Navbar;