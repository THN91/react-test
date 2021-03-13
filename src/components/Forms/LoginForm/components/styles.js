import {makeStyles} from "@material-ui/core/styles";
import {green, blue, lightBlue} from "@material-ui/core/colors";


export default makeStyles((theme) => ({
    avatar: {
        backgroundColor: blue[100],
        color: green[600],
    },
    loginBtn: {
        color: lightBlue[50],
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));