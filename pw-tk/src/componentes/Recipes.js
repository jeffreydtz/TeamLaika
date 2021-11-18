import React, {useEffect, useState} from "react";
import Cards from "./Cards/Cards";
import {httpGet, httpPost} from "../utils/httpFunctions";
const axios = require('axios');


const Recipes = () => {

    const [Recipes, setRecipes] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])


    const fetchRecipes = () => {
        httpGet('api/Recipes/')
            .then((res) => setRecipes(res.data))
    }

    const createCourse = () => {
        httpPost('api/Recipes/', { name: name, description: description})
            .then(fetchRecipes)
    }

    useEffect(fetchRecipes, [])


    return(
        <div>
            <div>
                <h1>Recetas de cocina</h1>
            </div>
            <form onSubmit={createCourse}>
                <fieldset>
                    <legend>Cree su Receta!</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Nombre de la Receta</label>
                        <input type="text" id="disabledTextInput" className="form-control"  value={name}
                               onChange={(e) => setName(e.target.value) } placeholder="Ej: Torta Oreo"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Descripcion</label>
                        <input type="text" id="disabledTextInput" className="form-control"  value={description}
                               onChange={(e) => setDescription(e.target.value) }
                               placeholder="Ej: Ingredientes: 1 paquete de galletitas oreos, etc."
                        />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Ingrese imagen de receta terminada</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary">CREAR RECETA</button>
                </fieldset>
            </form>
            <div>
                <Cards />
            </div>
        </div>

        )
}
export default Recipes;