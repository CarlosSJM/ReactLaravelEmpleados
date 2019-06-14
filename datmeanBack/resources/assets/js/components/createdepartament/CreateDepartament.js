import axios from 'axios'
import React, {Component} from 'react'

class CreateDepartament extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateDepartament = this.handleCreateDepartament.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    /*Este handler nos recogera el valor del formulario y nos lo enviara*/
    handleCreateDepartament (event) {
        event.preventDefault()

        const { history } = this.props

        const newDepartament = {
            departament_name : this.state.name
        }

        axios.post('/api/Departament', newDepartament)
            .then(
                alert('departamento creado con exito!')
            )
            .catch(error => {
                const {errors} = error.response.data;
                console.log(errors)
            })
    }
    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Crea tu nuevo Departamento</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateDepartament}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Nombre del Departamento </label>
                                        <input
                                            id='name'
                                            type='text'
                                            className={`form-control`}
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                    </div>
                                    <button className='btn btn-primary'>Crear Nuevo departamento</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateDepartament
