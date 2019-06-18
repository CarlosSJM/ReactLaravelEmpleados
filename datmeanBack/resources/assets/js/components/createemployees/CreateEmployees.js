import axios from 'axios'
import React, {Component} from 'react'
import {ToastsContainer, ToastsStore} from 'react-toasts'

class CreateEmployees extends Component {
    constructor (props) {
        super(props)
        this.state = {
                name: 'Pilar',
                lastname: 'Moreno',
                age: 30,
                gender: 'Femenino',
                id_departament: 2,
                contract_date: '2019-06-14',
            departamentOptions:[],
            sexoOptions:[ {id:1, gender:'Masculino'},{id:2, gender:'Femenino'},{id:3, gender:'NS/NC'}]
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateEmployee = this.handleCreateEmployee.bind(this)
    }
    /*Definicion de HANDLERS*/
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCreateEmployee (event) {
        event.preventDefault()
        /*preparamos lod datos recogido en el formulario para enviarlo por POST*/
        const newEmployee = {
            name : this.state.name,
            lastname : this.state.lastname,
            age : this.state.age,
            gender : this.state.gender,
            id_departament : this.state.id_departament,
            contract_date : this.state.contract_date
        }
        //name lastname age gender id_departament contract_date

     /*COMUNICACION CON API*/
     axios.post('/api/Employees', newEmployee)
            .then(
                //mensaje de exito en el formulario
                ToastsStore.success("Nuevo Empleado creado!! Con ExitoooOOO!!!")
            )
            .catch(error => {
                const {errors} = error.response.data;
                console.log(errors);
            })
    }
    /*Get para traer datos de departamento para input select ->WillMount para que haga la llamada antes de que renderice*/
    componentWillMount () {
        axios.get('/api/Departament').then(response => {
             this.setState({
                 departamentOptions: response.data
             })
        })
    }
    render () {
        const { departamentOptions } = this.state
        const { sexoOptions } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='container py-4'>
                            <div className='card-header'>Crea un nuevo empleado</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateEmployee}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Nombre</label>
                                        <input
                                            id='name'
                                            type='text'
                                            className={`form-control`}
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='lastname'>apellido </label>
                                        <input
                                            id='lastname'
                                            type='text'
                                            className={`form-control`}
                                            name='lastname'
                                            value={this.state.lastname}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='age'>Edad </label>
                                        <input
                                            id='age'
                                            type='number'
                                            className={`form-control`}
                                            name='age'
                                            min="0" max="100"
                                            value={this.state.age}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='gender'>Genero</label>
                                        <select className={`form-control`}
                                                name="gender"
                                                value={this.state.gender}
                                                onChange={this.handleFieldChange}>
                                            {sexoOptions.map((item, key) => {
                                                return <option key={key} value={item.gender}>{item.gender}</option>;
                                            })}
                                        </select>
                                        <label htmlFor='id_departament'>Departamento</label>
                                        <select className={`form-control`}
                                                name="id_departament"
                                                value={this.state.id_departament}
                                                onChange={this.handleFieldChange}>
                                            {departamentOptions.map((item, key) => {
                                                return <option key={key} value={item.id}>{item.departament_name}</option>;
                                            })}
                                        </select>
                                        <label htmlFor='contract_date'>Fecha de contrato</label>
                                        <input
                                            id='contract_date'
                                            type='date'
                                            className={`form-control`}
                                            name='contract_date'
                                            value={this.state.contract_date}
                                            onChange={this.handleFieldChange}
                                        />

                                    </div>
                                    <button className='btn btn-primary'>Crear Nuevo nuevo empleado</button>
                                    <ToastsContainer store={ToastsStore}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployees
