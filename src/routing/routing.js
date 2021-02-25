import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="firstPage">Page 1</Link>
                    </li>
                    <li>
                        <Link to="secondPage">Page 2</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="firstPage">
                    <firstPage />
                </Route>
                <Route path="secondPage">
                    <secondPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Main;
