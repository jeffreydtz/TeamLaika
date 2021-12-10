   
import React from 'react';
import pgimg from "../../images/logo.png";
import "../Cards/card.css"


export default function Product(props) {
  const { product, onAdd } = props;
  return (
    
  <div className="card flex">
        <div className="">
          <div className="" >
            <img src={pgimg} className=" img-fluid" alt="..." height={25}/>
            <div className="card-body">
              <h5 className="card-text">{product.name} </h5>
              <h6 className="card-text">${product.price} </h6>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-primary" onClick={() => onAdd(product)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
        </div>
  )
}

