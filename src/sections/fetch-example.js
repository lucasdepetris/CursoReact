import React, {Component} from 'react'

export default class FetchExample extends Component {

  state = {bpi:{}}

  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const {bpi} = data
        const {chartName} = data
        this.setState({bpi})
        console.log(data)
        console.log(bpi)
        console.log(chartName)
      })
    }

  _renderCurrencies(){
    const {bpi} = this.state
    const currencies = Object.keys(bpi) //['EUR','GBP','USD']
    return currencies.map(currency => (
      <div key = {currency}>
        1 BTC is {bpi[currency].rate}
        <span>{currency}</span>
      </div>
    ))
  }

  render(){

    return (
      <div>
        <h4>Bitcoin Price Index</h4>
        {this._renderCurrencies()}
      </div>
    )
  }
}
