import React from 'react';
import App from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import { LoginForm } from '../Forms/LoginForm';

export default function AppBar() {
    const classes = useStyles();

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
                    <LoginForm />
                </Toolbar>
            </App>
        </div>
    );
}