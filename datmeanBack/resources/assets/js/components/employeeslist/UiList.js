import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

/*//////////////////COMPO DE PRUEBAS//////////////////////*/



/*
/!*function createData( id, nombre, apellidos, edad, genero, departamento, fecha_contrato ) {
return {  nombre, apellidos, edad, genero, departamento,fecha_contrato };
}*!/
*/
/*function createData( id, name, lastname, age, gender, departament.departament_name, contract_date,) {
    return {  id, name, lastname, age, gender, departament.departament_name, contract_date };*/

/*const rows =[
    {
        id : '',
        name : '',
        lastname : '',
        age : '',
        gender : '',
        departament : {departament_name : ''},
        contract_date : ''
}
]*/

/*const rows = [];*/


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

//name lastname age gender id_departament contract_date
class UiList extends Component {
    constructor () {
        super()
        this.state = {
            employeesData: []
        }
        /*makeStyles.this.state()*/
    }
    /*makeStyles(){theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(1),
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
    })};*/
    /*AXIOS  Get a la API para que nos sirva listado del empleados de la base de datos los recogemos con employeesData*/
    componentDidMount () {
        axios.get('/api/Employees').then(response => {
            this.setState({
                employeesData: response.data
            })
        })
    }
    render() {
        /*const classes = makeStyles();*/
        const { employeesData } = this.state
        return (
            <Paper className={{/*classes.root*/}}>
                <Table className={{/*classes.table*/}}>
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
                        {employeesData.map(row => (
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
}

export default UiList;
