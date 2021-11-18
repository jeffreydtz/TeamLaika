import React from "react";
import Card from "./Card";

import image1 from "./cardImages/image1.png";
import image2 from "./cardImages/image2.png";
import image3 from "./cardImages/image3.png";


const cards = [
    // {
    //     id: 1,
    //     title: "Masa Sablée",
    //     image: image1,
    //
    // },
    // {
    //     id: 2,
    //     title: "Decoracion de tortas",
    //     image: image2,
    // },
    // {
    //     id: 3,
    //     title: "Bizcochuelo",
    //     image: image3,
    // },
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ title, image, id }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;