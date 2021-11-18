import React, {useEffect} from "react";
import Cards from "./Cards/Cards";
const axios = require('axios');


const Courses = () => {

    const fetchCourses = () => {
        axios.get( url: '')
        .then((res: AxiosResponse<any> ) => setCourses(res))


    }

    useEffect(fetchCourses, deps: [])


    return(
        <div>
            <div>
                <h1>Cursos de cocina</h1>
            </div>
            <div>
                <Cards />
            </div>
        </div>

        )
}
export default Courses;