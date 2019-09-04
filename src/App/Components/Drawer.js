import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles/index';
import Drawer from '@material-ui/core/Drawer/index';
import List from '@material-ui/core/List/index';
import Divider from '@material-ui/core/Divider/index';
import IconButton from '@material-ui/core/IconButton/index';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {withRouter} from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";


const useStyles = makeStyles(theme => {
    return {
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 240,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }
    }
});

function AppDrawer({open, handleDrawerClose, history}) {

    const classes = useStyles();
    const DRAWER_ELEMENTS = [
        {
            main: true,
            text: 'Dashboard',
            action: () => history.push('/'),
            icon: <DashboardIcon/>
        },
        {
            main: false,
            text: 'Score by country',
            action: () => history.push('/score-by-country'),
            icon: <AssignmentIcon/>
        },
        {
            main: false,
            text: 'Score by gender',
            action: () => history.push('/score-by-gender'),
            icon: <AssignmentIcon/>
        }
    ];

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                <div>
                    {DRAWER_ELEMENTS
                        .filter(element => element.main)
                        .map((element, index) => (
                            <ListItem key={index} button onClick={element.action}>
                                <ListItemIcon>
                                    {element.icon}
                                </ListItemIcon>
                                <ListItemText primary={element.text}/>
                            </ListItem>
                        ))}
                </div>
            </List>
            <Divider/>
            <div>
                <List>
                    <ListSubheader inset>
                        Saved reports
                    </ListSubheader>
                    {DRAWER_ELEMENTS
                        .filter(element => !element.main)
                        .map((element, index) => (
                            <ListItem key={index} button onClick={element.action}>
                                <ListItemIcon>
                                    {element.icon}
                                </ListItemIcon>
                                <ListItemText primary={element.text}/>
                            </ListItem>
                        ))}
                </List>
            </div>
        </Drawer>
    );
}

export default withRouter(AppDrawer);
