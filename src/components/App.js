import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path= "/pokemon">
                    <Articles />
                </Route>

                <Route path= "/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}