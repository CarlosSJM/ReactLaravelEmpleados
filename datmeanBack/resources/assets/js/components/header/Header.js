import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Paper from '@material-ui/core/Paper/index';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import EmployeesList from "../employeeslist/EmployeesList";
import CreateDepartament from "../createdepartament/CreateDepartament"
import CreateEmployees from "../createemployees/CreateEmployees";
import Provisionalform from "../createemployees/Provisionalform";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    Paper: {
        elevation : 1,
        margin: 5,
    },
});

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Listado Empleados" />
                <Tab label="Nuevo Empleado" />
                <Tab label="Nuevo Departamento" />
                <Tab label="form pruebas" />
            </Tabs>
            {value === 0 ? <EmployeesList/> : "" }
            {value === 1 ? <CreateEmployees/>: "" }
            {value === 2 ? <CreateDepartament/> : "" }
            {value === 3 ? <Provisionalform/> : "" }
        </Paper>
    );
}
