import React from 'react';
import App from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles'


export default function AppBar(props) {
    const classes = useStyles();
    const { openLoginForm, openSignForm } = props;


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
                    <Button color="inherit" onClick={openSignForm}>Sign up</Button>
                    <Button color="inherit" onClick={openLoginForm}>Login</Button>
                </Toolbar>
            </App>
        </div>
    );
}