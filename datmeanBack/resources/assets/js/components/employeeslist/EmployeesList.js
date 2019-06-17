import axios from 'axios'
import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

class EmployeesList extends Component {
    constructor () {
        super()
        this.state = {
            employeesData: []
        }
    }
/*AXIOS  Get a la API para que nos sirva listado del empleados de la base de datos los recogemos con employeesData*/
    componentDidMount () {
        axios.get('/api/Employees').then(response => {
            this.setState({
                employeesData: response.data
            })
        })
    }
    render () {
        const { employeesData } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Listado Empleados</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <ul className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
                                        <li className="list-group-item">Nombre</li>
                                        <li className="list-group-item">Apellidos</li>
                                        <li className="list-group-item">Edad</li>
                                        <li className="list-group-item">Genero</li>
                                        <li className="list-group-item">Departamento</li>
                                        <li className="list-group-item">Fecha de contrato</li>
                                    </ul>
                                    {employeesData.map(employeesData => (
                                        <ul
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/${employeesData.id}`}
                                            key={employeesData.id}
                                        >
                                            <li className="list-group-item">{employeesData.name}</li>
                                            <li className="list-group-item">{employeesData.lastname}</li>
                                            <li className="list-group-item">{employeesData.age}</li>
                                            <li className="list-group-item">{employeesData.gender}</li>
                                            <li className="list-group-item">{employeesData.departament.departament_name}</li>
                                            <li className="list-group-item">{employeesData.contract_date}</li>
                                            {/*<span className='badge badge-primary badge-pill'>
                                            {employeesData.id}
                                            </span>*/}
                                        </ul>
                                    ))}
                                </ul>
                                {/*<Link className='btn btn-primary btn-sm mb-3' to='2'>
                                    Añadir nuevo empleado!
                                </Link>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeesList
