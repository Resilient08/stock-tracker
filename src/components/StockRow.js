import React, { Component } from 'react';
import {iex} from '../config/iex.js';
import {stock} from '../resources/stock.js'; //this class removes dependency on former iex class



class StockRow extends Component {
    //constructors tell objects how we want to build them
    constructor (props) { //props allows characteristics to be passed through objects
        super(props) //calls the component
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: null,
            precent_change: null
            
        }
    }

    changeStyle() {
        return{
        color: (this.state.dollar_change > 0) ? '#4caf50' : '#e53935',
        fontSize: '0.8rem',
        marginLeft: 5
        }
      }

    applyData(data) { 
       console.log(data)
        this.setState({ 
            price: data.price.toFixed(2),
            date: data.date,
            time: data.time,
        });
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
            const dollar_change = (data.price - yesterday.price).toFixed(2);
            const percent_change = (100 * dollar_change / yesterday.price).toFixed(1);

            this.setState({
                dollar_change: `${dollar_change}`,
                percent_change: ` (${percent_change}%)`
            })
        })
    }


    componentDidMount() { 
       
        // const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`

        //      fetch(url)
        //      .then((response) => response.json())
        //      .then((data) => {
        //         console.log(data)
        //         this.setState({
        //             data: data[data.length - 1]
        //         })
        //      }) 

         stock.latestPrice(this.props.ticker, this.applyData.bind(this)) //research why .bind makes work  
     }

    render() {
        return ( //this.state - when the state changes, data that is dislayed changes
            
            <li className="list-group-item"> 
            <b>{this.props.ticker}</b> ${this.state.price}
            <span className="change" style={this.changeStyle()}>
                {this.state.dollar_change}
                {this.state.percent_change}
              </span>  
              </li> 
          

        )
    }
} 








export default StockRow;