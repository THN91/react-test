import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from "./components/AppBar";

function App() {
  return (
      <Fragment>
          <CssBaseline />
          <AppBar />
        {/*<Main />*/}
      </Fragment>
  );
}

export default App;
