import React, {Component} from 'react'
import cars from '../data/cars.json'

export default class Lists extends Component {



  render(){

    const numbers = [1,1,2,3,4]

    return (
      <div>
        <h4>Trabajando con listas</h4>
          {numbers.map((number,index) => {
            return <p key = {index} >Soy el numero {number} y el index {index}</p>
          })}

        <h4>Listas de objetos</h4>
        <ul>
          {cars.map(car => {
              return <li key = {car.id}>
                      <p><strong>ID: </strong>{car.id}</p>
                      <p><strong>Nombre: </strong>{car.name}</p>
                      <p><strong>Nombre: </strong>{car.company}</p>
                    </li>
                })}
        </ul>
      </div>
    )
  }
}
