import React, {Component} from 'react'


export default class Forms extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('twitter').value
    console.log({name,email})
  }

  handleChange(e){
    console.log('Handle Change')
    console.log(e.target.checked)
  }

  render(){
    return (
      <div>
            <h4>Formularios</h4>
            <form onSubmit = {this.handleSubmit}>
              <p>
                <label>Nombre: </label>
                <input
                id = 'name'
                name = 'userName'
                placeholder = 'Introduce el nombre' />
              </p>

              <p>
                <label>Twitter: </label>
                <input
                id = 'twitter'
                name = 'twitterAccount'
                placeholder = 'Introduce tu Twitter' />
              </p>

              <p>
              <label>
              <input onChange = {this.handleChange} type = 'checkbox' />
              Accepted Terms
              </label>
              </p>

              <button>Enviar</button>
            </form>
      </div>
    )
  }
}
