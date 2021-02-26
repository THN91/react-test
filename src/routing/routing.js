import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FirstPage from "../components/firstPage";
import SecondPage from "../components/secondPage";

function Main() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/firstPage">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/secondPage">Page 2</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/firstPage">
                    <FirstPage />
                </Route>
                <Route path="/secondPage">
                    <SecondPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Main;
