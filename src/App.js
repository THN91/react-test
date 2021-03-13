import React, {Fragment, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from "./components/AppBar";
import { LoginForm } from "./components/Forms/LoginForm/components";

function App(props) {
    const [open, setOpen] = useState(false);

    const handlerClickOpen = () => {
        setOpen(true)
    };

    const handlerClose = () => {
        setOpen(false)
    };

  return (
      <Fragment>
          <CssBaseline />
          <AppBar onOpen={handlerClickOpen}/>

          {open && <LoginForm onClose={handlerClose}/>}
      </Fragment>
  );
}

export default App;
