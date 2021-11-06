import logo from './images/logo.png'
import './App.css';
import pgimg from './images/torta.png'

function App() {
  return (
      <div>
        <h1 className="custom-title">DejateTentar</h1>
        <div className="nav-bar">
          <h4 className="nav-element nav-hover">Inicio</h4>
          <h4 className="nav-element nav-hover">Sobre Mi</h4>
          <h4 className="nav-element nav-hover">Productos</h4>
          <h4 className="nav-element nav-hover">Cursos</h4>
          <h4 className="nav-element nav-hover">Mi Perfil</h4>
        </div>
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
      </div>

);
}

export default App;
