import React from "react";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

export default function LoginForm(props) {
    const classes = useStyles();
    const { onClose } = props;

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
            <DialogTitle id="simple-dialog-title">Create New Account</DialogTitle>
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
        </Dialog>
    );
}
