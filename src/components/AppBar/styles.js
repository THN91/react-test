import {makeStyles} from "@material-ui/core/styles";
import {blue} from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    loginButton: {
        color: blue,
    },
}));