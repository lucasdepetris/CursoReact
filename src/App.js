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

  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = firebase.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebase.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default App;
