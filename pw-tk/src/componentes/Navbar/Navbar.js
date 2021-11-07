import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (

        <div>
            <h1 className="custom-title">DejateTentar</h1>
            <div className="nav-bar">
                <Link to={'/componentes/Home'}><h4 className="nav-element nav-hover">Inicio</h4></Link>

                <Link to={'/componentes/Products'}> <h4 className="nav-element nav-hover">Productos</h4></Link>
                {/*<h4 className="nav-element nav-hover">Cursos</h4>*/}
                <Link to={'/componentes/Profile'}><h4 className="nav-element nav-hover">Mi Perfil</h4></Link>
            </div>
        </div>
    );
}
export default Navbar;