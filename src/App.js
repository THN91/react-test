import React, {Fragment, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from "./components/AppBar";
import { popups } from "./config/popup";

function App() {
    const [ isOpenPopup, setIsOpenPopup ] = useState({
        isOpen: false,
        popupName: null,
    });

    const openPopup = (name, data) => {
        setIsOpenPopup({
            ...isOpenPopup,
            isOpen: true,
            popupName: name,
            data
        })
    }

    const closePopup = () => {
        setIsOpenPopup({
            ...isOpenPopup,
            isOpen: false,
            popupName: null,
        })
    }

    const Popup = popups[isOpenPopup.popupName] || null

    return (
      <Fragment>
        <CssBaseline />
        <AppBar openPopup={openPopup}/>

        {/*ADD Drawer */}

        {isOpenPopup.isOpen && <Popup onClose={closePopup} data={isOpenPopup.data}/>}
      </Fragment>
    );
}

export default App;
