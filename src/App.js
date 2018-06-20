import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'

/*function Hello (props){
    return <h2>{props.title}</h2>
}*/

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render(){
    const{
      arrayOfNumbers,
      isActivated,
      title,
      objectWithInfo,
      multiply
    } = this.props

    const textoSegunBool = isActivated ? "On" : "Off"
    const mappedNumbers = arrayOfNumbers.map(multiply)

    return (
            <div>
                {title}
                <p>{textoSegunBool}</p>
                <p>{objectWithInfo.key}</p>
                <p>{mappedNumbers.join(', ')}</p>
            </div>
          )
  }
}

Text.defaultProps = {
  title: 'titulo por defecto'
}

class Contador extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.contadorInicial)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render () {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render () {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  state = { name: 'Miguel' }

  render() {
    const numbers = [1,1,2,3,4]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title = "Hello from props" />
        </header>
        <Text
          arrayOfNumbers = {[2,3,10]}
          objectWithInfo = {{key:"First Value",Key2:"Other Value"}}
          multiply = {(number) => number * 4}
          isActivated
          number = {2}
          text = "Texto en string"
          title = {<h1>Este es el titulo</h1>}
         />
         {this.state.name}
         <p>Propagando el state de nuestros componentes</p>
         <Contador contadorInicial={100} />
         <ConditionalSection />

         <div>
          <h4>Trabajando con listas</h4>
          {numbers.map((number,index) => {
            return <p key = {index} >Soy el numero {number} y el index {index}</p>
          })}
         </div>
      </div>

    );
  }
}

export default App;
