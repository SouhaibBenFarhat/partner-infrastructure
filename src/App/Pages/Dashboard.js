import React from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid/index';
import Paper from '@material-ui/core/Paper/index';
import ScoreTable from '../Components/Tables/ScoreTable';


const useStyles = makeStyles(theme => {
    return {
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        }
    }
});

export default function Dashboard({peoples = []}) {

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <ScoreTable peoples={peoples}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
