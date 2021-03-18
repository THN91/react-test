import React, {Fragment, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from "./components/AppBar";
import { LoginForm } from "./components/Forms/LoginForm/components";
import { SignForm } from "./components/Forms/SignForm/components"

function App() {
    const [openLogin, setLogin] = useState(false);
    const [openSign, setSign] = useState(false);


  return (
      <Fragment>
          <CssBaseline />
          <AppBar
                  openLoginForm={() => setLogin(true)}
                  openSignForm={() => setSign(true)} />
            <SignForm onClose={() => setSign(false)} isOpen={openSign}/>
          <LoginForm onClose={() => setLogin(false)} isOpen={openLogin}/>
      </Fragment>
  );
}

export default App;
