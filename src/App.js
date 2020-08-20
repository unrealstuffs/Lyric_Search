import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Lyrics from "./components/Lyrics";
import { ContextController } from "./context/context";

import "./App.sass";

function App() {
    return (
        <ContextController>
            <Router>
                <React.Fragment>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route
                                exact
                                path="/lyrics/track/:id"
                                component={Lyrics}
                            />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </ContextController>
    );
}

export default App;
