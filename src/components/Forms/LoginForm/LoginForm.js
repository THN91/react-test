import React, {useState} from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function LoginForm(props) {
    const { onClose } = props;
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const classes = useStyles();

    // Add function to show email and password when user clicks to SUBMIT

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
            <DialogTitle id="simple-dialog-title">Log In!</DialogTitle>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    value={email}
                    label="Email"
                    type="Email"
                    variant="filled"
                    className={classes.button}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    value={password}
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.button}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="primary">Submit</Button>
            </form>
        </Dialog>
    );
}
