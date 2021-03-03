import React, {useState} from "react";

import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import useStyles from "../styles";

export function LoginForm(props) {
    const classes = useStyles();
    const { onClose, open } = props;

    const [email, setEmail] = useState('');

    const handlerInput = (e) => {
        // console.log('e', e.target.value)
        // setEmail(e.target.value)
    }

    const sendData = () => {
        // console.log('send')
        // console.log('a', email)
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Create New Account</DialogTitle>
            <List>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            label="Email"
                            type="Email"
                            variant="filled"
                            value={email}
                            onChange={handlerInput}
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={handlerInput}
                        />
                    </div>
                    <Button
                        variant="contained"
                        onClick={sendData}
                    >
                        Default
                    </Button>
                </form>
            </List>
        </Dialog>
    );
}

LoginForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};