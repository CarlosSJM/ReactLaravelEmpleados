import axios from 'axios'
import React, {Component} from 'react'


class CreateEmployees extends Component {
    constructor (props) {
        super(props)
        this.state = {
                name: 'Pilar',
                lastname: 'Moreno',
                age: 30,
                gender: 'Femenino',
                id_departament: 2,
                contract_date: '2019-06-14'
        }
        departamentOptions:[]
        sexoOptions:['Masculino', 'Femenino']

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
        const { history } = this.props

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
                alert('habemus nuevo empleado!')
            )
            .catch(error => {
                const {errors} = error.response.data;
                console.log(errors);
            })
    }
    /*Get para traer datos de departamento para input select*/
    componentDidMount () {
        axios.get('/api/Departament').then(response => {
            this.setState({
                departamentOptions: response.data
            })
        })
    }
    render () {
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
                                        <input
                                            id='gender'
                                            type='text'
                                            className={`form-control`}
                                            name='gender'
                                            value={this.state.gender}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='id_departament'>Departamento</label>
                                        <input
                                            id='id_departament'
                                            type='number'
                                            className={`form-control`}
                                            name='id_departament'
                                            min="1" max="20"
                                            value={this.state.id_departament}
                                            onChange={this.handleFieldChange}
                                        />
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
