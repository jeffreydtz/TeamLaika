
import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunctions";

const Profile = () => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        httpGet('api/me/').then((res) => setUserData(res.data))
    }, [])

    return <div>
        <h2>Hola Cocinero! Este es tu perfil</h2>
        <h3>Mi nombre de usuario es {userData.username}</h3>
    </div>
}

export default Profile