import { React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [ email, setEmail ] = useState('')
    const [ firstname, setFirstname ] = useState('')
    const [ secondname, setSecondname ] = useState('')
    // [item1, item2]

    const click = function (e){
        setEmail(e.target.value)
    }

    const click1 = (e) => setSecondname(e.target.value)
    const click2 = () => setFirstname("done")

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        {email}
                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        {firstname}
                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        {secondname}
                    </Typography>


                    <Button color="inherit">
                        <input onChange={click} />
                        <input onChange={click1} onClick={click2}/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}