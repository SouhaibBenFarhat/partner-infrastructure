import React, {lazy, Suspense, useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles/index';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from "./Components/Drawer";
import Container from "@material-ui/core/Container";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import People from "./HttpRequests/People";
import {setPeoples} from "./Redux/Actions/PeopleActions";

const Dashboard = lazy(() => import('./Pages/Dashboard'));
const ScoreByCountry = lazy(() => import('./Pages/ScoreByCountry'));
const ScoreByGender = lazy(() => import('./Pages/ScoresByGender'));


const drawerWidth = 240;

const useStyles = makeStyles(theme => (
        {
            root: {
                display: 'flex',
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
            toolbar: {
                paddingRight: 24, // keep right padding when drawer closed
                backgroundColor: theme.palette.primary.main
            },
            menuButton: {
                marginRight: 36,
                color: theme.palette.primary.contrastText
            },
            menuButtonHidden: {
                display: 'none',
            },
            title: {
                flexGrow: 1,
                color: theme.palette.primary.contrastText
            },
            content: {
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            },
            appBarSpacer: theme.mixins.toolbar,
            container: {
                paddingTop: theme.spacing(4),
                paddingBottom: theme.spacing(4),
            },
        }
    )
);

export default function App() {

    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();
    const peoples = useSelector(state => state.peoples.peoples);
    useEffect(() => {
        People.all().then((response) => dispatch(setPeoples(response.data)))
    }, [dispatch]);


    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Holidu Interview Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <AppDrawer open={open} handleDrawerClose={handleDrawerClose}/>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Suspense fallback={<div/>}>
                            <Switch>
                                <Route exact
                                       path="/"
                                       render={props => (<Dashboard peoples={peoples} {...props} />)}
                                />
                                <Route exact
                                       path="/score-by-country"
                                       render={props => (<ScoreByCountry peoples={peoples} {...props} />)}
                                />
                                <Route exact
                                       path="/score-by-gender"
                                       render={props => (<ScoreByGender peoples={peoples} {...props}/>)}
                                />
                            </Switch>
                        </Suspense>
                    </Container>
                </main>
            </BrowserRouter>
        </div>
    );
}

