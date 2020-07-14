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

function App() {
    return (
        <div className="App">
            <main>
                <Suspense fallback={<Loading/>}>
                    <Router>
                        <Header/>

                        <Switch>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/history">
                                <History/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </Router>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
