import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import MenuItem from "@material-ui/core/MenuItem";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        active:{
            background: '#000000 !important',
        }
    }),
);

 function ButtonAppBar(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [side]: open });
    };


     if (!props.isAuth) {
         return   <Redirect to="/auth" />;
     }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        OpusV
                    </Typography>
                    {!props.isAuth
                        ? <NavLink to="/auth" color="inherit">Login</NavLink>
                        : <NavLink to="/logout" color="inherit">Logout</NavLink>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                <div  className={classes.list}>
                <NavLink exact to="/" style={{ textDecoration: 'none' }} onClick={toggleDrawer('left', false)}>
                    <MenuItem>
                        List All
                    </MenuItem>
                </NavLink>
                <NavLink exact to="/add" style={{ textDecoration: 'none' }} onClick={toggleDrawer('left', false)}>
                    <MenuItem>
                        Add New
                    </MenuItem>
                </NavLink>
                </div>

            </Drawer>
        </div>
    );


}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.token!==null
    };
};

export default connect( mapStateToProps, null )(ButtonAppBar)