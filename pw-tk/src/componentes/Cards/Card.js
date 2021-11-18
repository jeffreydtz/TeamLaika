import React from "react";


import "./card.css";

function Card({ imageSource, title, description}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {description}
                </p>
            </div>
        </div>
    );
}



export default Card;


import pgimg from "../images/programacion.jpeg";
import {Link} from "react-router-dom";


function SubjectCard ({subject}) {

    return (
        <div className="card-container-custom">
            <div className="card">
                <img src={pgimg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{subject.name}</h5>
                    <p className="card-text">
                        {subject.description}
                    </p>
                    <Link to={`/main/courses/detail/${subject.name}`}><a className="btn btn-primary">Ver más</a></Link>
                </div>
            </div>
        </div>
    )
}
export default