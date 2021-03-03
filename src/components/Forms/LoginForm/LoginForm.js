import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import useStyles from './styles'


function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Create New Account</DialogTitle>
            <List>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            label="Email"
                            type="Email"
                            variant="filled"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                    </div>
                </form>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    );
}