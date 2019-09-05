/* eslint-disable no-script-url */

import React, {useState} from 'react';
import Link from '@material-ui/core/Link/index';
import {makeStyles} from '@material-ui/core/styles/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import Title from '../Charts/Title';
import PeopleService from "../../Services/PeopleService";

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    selectedColumn: {
        fontWeight: 'bold',
        fontSize: 20,
        cursor: 'pointer'
    },
    defaultColumn: {
        cursor: 'pointer'
    }
}));

export default function ScoreTable({peoples = []}) {
    const classes = useStyles();
    const [rowsNumber, setRowsNumber] = useState(20);
    const [orderByColumn, setOrderByColumn] = useState(null);

    return (
        <React.Fragment>
            <Title>Scores listing</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => setOrderByColumn('first_name')}>
                            <span
                                className={(orderByColumn === 'first_name') ? classes.selectedColumn : classes.defaultColumn}>
                            First name
                            </span>
                        </TableCell>
                        <TableCell onClick={() => setOrderByColumn('last_name')}>
                            <span
                                className={(orderByColumn === 'last_name') ? classes.selectedColumn : classes.defaultColumn}>
                            Last name
                            </span>
                        </TableCell>
                        <TableCell onClick={() => setOrderByColumn('gender')}>
                            <span
                                className={(orderByColumn === 'gender') ? classes.selectedColumn : classes.defaultColumn}>
                            Gender
                            </span>
                        </TableCell>
                        <TableCell onClick={() => setOrderByColumn('city')}>
                            <span
                                className={(orderByColumn === 'city') ? classes.selectedColumn : classes.defaultColumn}>
                            City
                            </span>
                        </TableCell>
                        <TableCell onClick={() => setOrderByColumn('country')}>
                            <span
                                className={(orderByColumn === 'country') ? classes.selectedColumn : classes.defaultColumn}>
                            Country
                            </span>
                        </TableCell>
                        <TableCell onClick={() => setOrderByColumn('score')} align="right">
                            <span
                                className={(orderByColumn === 'score') ? classes.selectedColumn : classes.defaultColumn}>
                            Score
                            </span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        new PeopleService(peoples || []).orderBy(orderByColumn).slice(0, rowsNumber).map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.first_name || '--'}</TableCell>
                                <TableCell>{row.last_name || '--'}</TableCell>
                                <TableCell>{row.gender || '--'}</TableCell>
                                <TableCell>{row.city || '--'}</TableCell>
                                <TableCell>{row.country || '--'}</TableCell>
                                <TableCell align="right">{row.score || 0}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={() => setRowsNumber(rowsNumber * 2)}>
                    {peoples && rowsNumber >= peoples.length ? '' : 'See more scores'}
                </Link>
            </div>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={() => setRowsNumber(peoples.length)}>
                    {peoples && rowsNumber >= peoples.length ? '' : 'Show all'}
                </Link>
            </div>
        </React.Fragment>
    );
}
