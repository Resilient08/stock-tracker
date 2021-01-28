import React, { Component } from 'react';
import {stock} from '../resources/stock.js'; //this class removes dependency on former iex class

const changeStyle = {
    color: '#4caf50',
    fontSize: '0.8rem',
    marginLeft: 5
  }

class StockRow extends Component {
    //constructors tell objects how we want to build them
    constructor (props) { //props allows characteristics to be passed through objects
        super(props) //calls the component
        this.state = {
            data: {}
        }
    }

    applyData(data) {
        this.setState({ //The setState function "changes" the state (in this case, the data)
        data: data
    })
    }

    componentDidMount() { //Lifecycle event once component has loaded.  This is triggered whenever the page has loaded.
        //query the API
        //const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        //fetch(url)
        //.then((response) => response.json())
        stock.latestPrice(this.props.ticker, this.applyData.bind(this)) //research why .bind makes work
        
    }

    render() {
        return ( //this.state - when the state changes, data that is dislayed changes
            <li className="list-group-item">
            <b>{this.props.ticker}</b> ${this.state.data.price}
            <span className="change" style={changeStyle}>
              +12.34  (5.3%)
            </span>
            </li>
        
        // <tr> 
        //     {this.state.data && (
        //     // <React.Fragment>
        //     // <td></td>
        //     // <td></td>
        //     // <td>{this.state.data.date}</td>
        //     // <td>{this.state.data.time}</td>
        //     // </React.Fragment>
        // )}
        // </tr>
        // );
        )
    }
} 








export default StockRow;