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
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            percent_change: null
            
        }
    }

    applyData(data) { 
        console.log (data)
        this.setState({ 
            price: data.price.toFixed(2),
            date: data.date,
            time: data.time,
        });//The setState function "changes" the state (in this case, the data)  
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
            console.log(this.props.ticker, yesterday)
            const dollar_change = (data.price - yesterday.price).toFixed(2);
            const percent_change = (100 * dollar_change / yesterday.price).toFixed(2);
            this.setState({
                dollar_change: `${dollar_change}`,
                percent_change: ` (${percent_change}%)`
            })
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
            <b>{this.props.ticker}</b> ${this.state.price}
            <span className="change" style={changeStyle}>
              {this.state.dollar_change}
              {this.state.percent_change}
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