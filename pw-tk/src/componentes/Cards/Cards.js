import React from "react";
import Card from "./Card";

import image1 from "../../imagescourses/image1.png";
import image2 from "../../imagescourses/image2.png";
import image3 from "../../imagescourses/image3.png";


const cards = [
    {
        id: 1,
        title: "Masa Sablée",
        image: image1,
        url: "https://faztweb.com",
    },
    {
        id: 2,
        title: "Decoracion de tortas",
        image: image2,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Bizcochuelo",
        image: image3,
        url: "https://youtube.com/fazttech",
    },
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} url={url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;