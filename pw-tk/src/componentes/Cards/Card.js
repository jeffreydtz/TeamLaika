import React from "react";
import image1 from "./CardsImage.png";

import "./card.css";

function Card(receta) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={image1} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{receta.name}</h4>
                <p className="card-text text-secondary">
                    {receta.description}
                </p>
            </div>
        </div>
    );
}



export default Card;


