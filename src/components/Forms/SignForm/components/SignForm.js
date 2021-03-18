import React, {useState} from "react";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import useStyles from "./style"

export default function SignForm(props) {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const classes = useStyles();
    const { onClose, isOpen } = props;

    if(!isOpen){
        return null
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
            <DialogTitle id="simple-dialog-title">Create New Account</DialogTitle>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        value={email}
                        label="Email"
                        type="Email"
                        variant="filled"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        value={password}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
        </Dialog>
    );
}
