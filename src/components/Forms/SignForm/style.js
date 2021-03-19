import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: "300px",
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        margin: theme.spacing(1)
    }
}));