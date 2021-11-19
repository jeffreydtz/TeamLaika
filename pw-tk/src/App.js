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
import Recipes from "./componentes/Recipes";
import Profile from "./componentes/Profile";
import LoginScreen from "./componentes/LoginScreen/LoginScreen";
import AuthRoute from "./componentes/AuthRoute";
import Register from "./componentes/LoginScreen/Register";



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <AuthRoute exact={true} path={`/profile`}>
                        <Profile />
                    </AuthRoute>
                    <Route exact={true} path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/Register" exact={true}>
                        <Register />
                    </Route>
                    <Route path="/Recipes" exact={true}>
                        <Recipes />
                    </Route>
                    <Route path="/Profile" exact={true}>
                        <Profile />
                    </Route>
                    <route path='*'>
                        <h1>404 NOT FOUND </h1>
                    </route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;