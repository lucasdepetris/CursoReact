import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import Forms from './sections/forms'
import Events from './sections/events'
import Lists from './sections/lists'
import Articles from './sections/articles'
import FetchExample from './sections/fetch-example'
import EjemploCicloDeActualizacion from './sections/ejemploCicloDeActualizacion'
import EjemploDeComponentWillUnmount from './sections/componentWillUnmount'
import EjemploDeComponentDidCatch from './sections/componentDidCatch'
import BitCoinPriceContainer from './sections/container-component'

/*function Hello (props){
    return <h2>{props.title}</h2>
}*/

// const Hello = (props) => <h2>{props.title}</h2>

import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC4EynsIP-YkLMYY7SwBcvzxddS315Jn1Y",
    authDomain: "react-firebase-20b38.firebaseapp.com",
    databaseURL: "https://react-firebase-20b38.firebaseio.com",
    projectId: "react-firebase-20b38",
    storageBucket: "react-firebase-20b38.appspot.com",
    messagingSenderId: "427190600126"
}
firebase.initializeApp(config)

class App extends Component {

  constructor () {
    super()
    this.state = {
      listGrupos:[]
    }
  }
  componentDidMount(){
    const nameRef = firebase.database().ref().child('grupos')
    
    nameRef.on('value', snapshot => {
      console.log(snapshot)
      this.setState({
        listGrupos: snapshot.val()
      })
    })
  }
 
  render() {
    const listOfPositions = this.state.listGrupos.map(position => 
      <div key={position.idGrupo}>
          <h1>{position.idGrupo}</h1>
          <h1>{position.nombre}</h1>
      </div>
  );
  
  return (
      <div className="App">

         {/*<ConditionalSection />
         <Lists/>
         <Events/>
         <Forms/>*/}
         {/*<h4>Children props</h4>
         <Articles
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
          >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
          </Articles>*/}

          {/*<EjemploCicloDeActualizacion/>*/}
          {/*<EjemploDeComponentWillUnmount/>*/}
          {/*<EjemploDeComponentDidCatch/>*/}
          {/*<BitCoinPriceContainer/>*/}
          
          <div>{listOfPositions}</div>
      </div>

    );
  }
}

export default App;
