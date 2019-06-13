import axios from 'axios'
import React, {Component} from 'react'


class CreateEmployees extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            lastname: '',
            age: '',
            gender: '',
            id_departament: '',
            contract_date: ''
        }
        departamentOptions:[]
        sexoOptions:['Masculino', 'Femenino']
        this.handleFieldChangename = this.handleFieldChangename.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateEmployee = this.handleCreateEmployee.bind(this)
    }
    /*Definicion de HANDLERS*/
    handleFieldChangename (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
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
            lastname : this.state.name,
            age : this.state.name,
            gender : this.state.name,
            id_departament : this.state.name,
            contract_date : this.state.name
        }
        //lastname age gender id_departament contract_date

     /*COMUNICACION API*/
     axios.post('/api/Employees', newEmployee)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })
            .catch(error => {
                const {errors} = error.response.data;
                console.log(errors);
            })
    }
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
                        <div className='card'>
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
                                            onChange={this.handleFieldChangename}
                                        />
                                        <label htmlFor='lastname'>apellido </label>
                                        <input
                                            id='lastname'
                                            type='text'
                                            className={`form-control`}
                                            name='lastname'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='age'>Edad </label>
                                        <input
                                            id='age'
                                            type='number'
                                            className={`form-control`}
                                            name='age'
                                            min="0" max="100"
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='gender'>Genero</label>
                                        <input
                                            id='gender'
                                            type='text'
                                            className={`form-control`}
                                            name='gender'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='id_departament'>departamento</label>
                                        <input
                                            id='id_departament'
                                            type='number'
                                            className={`form-control`}
                                            name='id_departament'
                                            min="1" max="20"
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        <label htmlFor='contract_date'>fecha de contrato</label>
                                        <input
                                            id='contract_date'
                                            type='date'
                                            className={`form-control`}
                                            name='contract_date'
                                            value={this.state.name}
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
