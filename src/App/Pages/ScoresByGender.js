import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid/index';
import Paper from '@material-ui/core/Paper/index';
import Chart from '../Components/Charts/Chart';
import ScoreTable from '../Components/Tables/ScoreTable';
import PeopleService from "../Services/PeopleService";

const useStyles = makeStyles(theme => {
    return {
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 640,
        },
    }
});

export default function ScoreByGender({peoples = []}) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const peopleService = new PeopleService(peoples);


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                    <Chart data={peopleService.scoreByAttribute('gender')} title={'Score by Gender'}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <ScoreTable peoples={peoples}/>
                </Paper>
            </Grid>
        </Grid>
    );
}

ScoreByGender.defaultProps = {
    peoples: []
};
