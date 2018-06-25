import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import Forms from './sections/forms'
import Events from './sections/events'
import Lists from './sections/lists'
import Articles from './sections/articles'
import FetchExample from './sections/fetch-example'

/*function Hello (props){
    return <h2>{props.title}</h2>
}*/

// const Hello = (props) => <h2>{props.title}</h2>

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

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
          <FetchExample/>
      </div>

    );
  }
}

export default App;
