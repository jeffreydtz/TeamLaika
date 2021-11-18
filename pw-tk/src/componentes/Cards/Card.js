import React from "react";


import "./card.css";

function Card(receta) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={receta.image} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{receta.title}</h4>
                <p className="card-text text-secondary">
                    {receta.description}
                </p>
            </div>
        </div>
    );
}



export default Card;


