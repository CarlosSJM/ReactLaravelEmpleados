import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

/*//////////////////COMPO DE PRUEBAS//////////////////////*/

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

/*
/!*function createData( id, nombre, apellidos, edad, genero, departamento, fecha_contrato ) {
return {  nombre, apellidos, edad, genero, departamento,fecha_contrato };
}*!/
*/

/*const rows = [
    {
        id : '',
        name : '',
        lastname : '',
        age : '',
        gender : '',
        departament : {departament_name : ''},
        contract_date : ''
}
];*/

function componentDidMount () {
    axios.get('/api/Employees').then(response => {
        this.setState({
            rows: response.data
        })
    })
}
//name lastname age gender id_departament contract_date
function UiList() {
    const classes = useStyles();
    const rows = [componentDidMount().axios.this.setState(rows)];

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Apellidos</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Genero</TableCell>
                        <TableCell align="right">Departamento</TableCell>
                        <TableCell align="right">Fecha Contratación</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.lastname}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">{row.departament.departament_name}</TableCell>
                            <TableCell align="right">{row.contract_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default UiList;
