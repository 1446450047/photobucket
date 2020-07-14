import React, {Suspense, lazy} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Loading} from "./components/Loading";

const History = lazy(() => import("./pages/History"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Router>
                    <Header/>
                    <main>
                        <Switch>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/register">
                                <Register/>
                            </Route>
                            <Route path="/history">
                                <History/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </main>
                    <Footer/>
                </Router>
            </Suspense>
        </>
    );
}

export default App;
