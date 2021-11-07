import pgimg from "../images/torta.png";
import React from "react";



const Home = () => {
    return (
        <div>
            <div className="title-container">
                <h1 className="custom-title">Bienvenidos</h1>
                <p className="title-desc">¡Dejate llevar por los sabores! </p>
            </div>
            <div className="contents-container">
                <h2>¿Quiénes somos?</h2>
                <h3>Somos DejateTentar, aficionados por el mundo de la pastelería, queremos compartirles nuestros
                    sabores
                    para que disfruten con nosotros</h3>
                <div className="contens-div">
                    <ul className="contents">
                        <img src={pgimg} className="picture"/>
                        <h4> Queremos ofrecerte:</h4>
                        <li className="list-hover">TORTAS</li>
                        <li className="list-hover">TORTAS DE CUMPLEAÑOS</li>
                        <li className="list-hover">ALFAJORES</li>
                        <li className="list-hover">GALLETITAS</li>
                        <li className="list-hover">MASAS SECAS</li>
                        <li className="list-hover">TARTAS</li>
                        <li className="list-hover">CHIPAS</li>
                        <li className="list-hover">BUDINES</li>
                    </ul>
                </div>
            </div>
        </div>);
}


export default Home;


