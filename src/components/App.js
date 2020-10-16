import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Article from "./Article";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path= "/">
                    <Main />
                </Route>

                <Route path= "/pokemon/:id">
                    <Article />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}