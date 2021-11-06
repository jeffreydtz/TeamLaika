import pgimg from "../images/torta.png";


const Home = () => {
   return(
   <div>
       <div className="title-container">
        <h1 className="custom-title">Bienvenidos</h1>
        <p className="title-desc">Dejate llevar por los sabores!! </p>
       </div>
        <div className="contents-container">
            <h2>que ofrecemos?</h2>
        <div className="contens-div">
            <ul className="contents">
                <img src={pgimg} className="picture"/>
                <li className="list-hover">TORTAS</li>
                <li className="list-hover">TORTAS DE CUMPLEAÑOS</li>
                <li className="list-hover">ALFAJORES</li>
                <li className="list-hover">GALLETITAS</li>
                <li className="list-hover">MASAS SECAS</li>
                <li className="list-hover">TARTAS</li>
                <li className="list-hover">CHIPAS</li>
                <li className="list-hover">BUDINES</li>
            </ul>
        </div>
    </div>
       )
       }
