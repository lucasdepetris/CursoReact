import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Box extends Component {
  render () {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

export default class Articles extends Component {

  static propTypes = {
    author:PropTypes.string.isRequired
  }

  render(){
    const {title,author,date,children} = this.props

    return (
      <section>
        <h2>{this.props.title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}
