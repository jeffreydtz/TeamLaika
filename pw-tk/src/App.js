import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./componentes/Home";
// import Navbar from "./componentes/Navbar";
import './App.css';
import Navbar from "./componentes/Navbar/Navbar";
import Products from "./componentes/Products";


function App() {
    return (
        <Router>
            <div>
                <Navbar>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Products">Productos</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/users">Users</Link>*/}
                        {/*</li>*/}
                    </ul>
                </Navbar>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    {/*<Route path="/about">*/}
                    {/*    <About />*/}
                    {/*</Route>*/}
                    {/*<Route path="/users">*/}
                    {/*    <Users />*/}
                    {/*</Route>*/}
                    <Route path="/Products" exact={true}>
                        <Products />
                    </Route>
                    <Route path="/Home" exact={true}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;