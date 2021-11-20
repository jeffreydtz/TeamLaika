import React, {useState} from "react";
import image1 from "./CardsImage.png";
import "./card.css";
import {httpDelete, httpGet, httpPut} from "../../utils/httpFunctions";

function Card({receta}) {

    const [recipes, setRecipes] = useState([])
    const [description, setDescription] = useState([])

    let idrecipe = receta.id;
    let recipename = receta.name;
    let recipeprice = receta.price;

    const deleteRecipe = () =>{
        httpDelete('api/Recipes/'+idrecipe +"/")
            .then(fetchRecipes)
    }
    const modifyRecipe = () =>{
        httpPut('api/Recipes/'+idrecipe+"/", {id: idrecipe ,name: recipename, description: description,price: recipeprice})
            .then(fetchRecipes)
    }


    const fetchRecipes = () => {
        httpGet('api/Recipes/')
            .then((res) => setRecipes(res.data))
    }

    let finalRecipes = recipes;

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
                <h3>Precio: {receta.price}</h3>
                <h4>id: {receta.id}</h4>

            </div>
            <div>
                <form onSubmit={deleteRecipe}>
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Borrar Receta
                </button>
                </form>
                <form onSubmit={modifyRecipe}>
                    <input type="text" id="disabledTextInput" className="form-control" value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Modificar receta"
                    />
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Modificar Receta
                </button>
            </form>
            </div>
        </div>
    );
}

export default Card;


