import React from 'react';
import App from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { POPUP_TYPES } from "../../config/popup";

import useStyles from './styles'

export default function AppBar(props) {
    const classes = useStyles();
    const { openPopup } = props;

    const openSingUp = () => openPopup(POPUP_TYPES.REGISTRATION);
    const openLogin = () => openPopup(POPUP_TYPES.LOGIN);

    return (
        <div className={classes.root}>
            <App position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit" onClick={openSingUp}>Sign up</Button>
                    <Button color="inherit" onClick={openLogin}>Login</Button>
               </Toolbar>
            </App>
        </div>
    );
}