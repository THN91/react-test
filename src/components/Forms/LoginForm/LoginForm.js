import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import { LoginForm } from './components'

export default function SimpleDialogDemo() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined"  className={classes.loginBtn} onClick={handleClickOpen}>
                Login
            </Button>
            <LoginForm open={open} onClose={handleClose} />
        </div>
    );
}