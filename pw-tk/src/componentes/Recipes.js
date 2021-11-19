import React, {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunctions";
import Card from "./Cards/Card";


const Recipes = () => {

    const [filtered, setFiltered] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de filtrar" : "Filtrar"
    }

    let finalRecipes;

    if (filtered) {
        finalRecipes = recipes.filter((recipe) => {
            return recipe.price > 100
        })
    } else {
        finalRecipes = recipes
    }

    const fetchRecipes = () => {
        httpGet('api/Recipes/')
            .then((res) => setRecipes(res.data))
    }

    const createRecipe = () => {
        httpPost('api/Recipes/', {name: name, description: description, price: price})
            .then(fetchRecipes)
    }

    useEffect(createRecipe, [])


    return (
        <div>
            <div>
                <h1>Recetas de cocina</h1>
            </div>
            <div>
            <button className="btn btn-primary" onClick={clickFunction}>
                {getName()}
            </button>
            </div>
            <div className="inputWide">
                <form onSubmit={createRecipe}>
                    <fieldset>
                        <legend>Cree su Receta!</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Nombre de la Receta</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={name}
                                   onChange={(e) => setName(e.target.value)} placeholder="Ej: Torta Oreo"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Descripcion</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={description}
                                   onChange={(e) => setDescription(e.target.value)}
                                   placeholder="Ej: Ingredientes: 1 paquete de galletitas oreos, etc."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Precio</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                                   placeholder="Ej: 200"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">CREAR RECETA</button>
                    </fieldset>
                </form>
            </div>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        finalRecipes
                            .map((maprecipe) => {
                                return (
                                    <Card receta={maprecipe}/>
                                )
                            })
                    }
                </div>
            </div>
        </div>)
}

export default Recipes;